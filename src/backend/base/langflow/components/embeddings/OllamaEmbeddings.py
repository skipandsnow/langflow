from langchain_community.embeddings import OllamaEmbeddings
from typing import Any

from langflow.base.models.model import LCModelComponent
from langflow.field_typing import Embeddings
from langflow.io import FloatInput, MessageTextInput, Output, DropdownInput


class OllamaEmbeddingsComponent(LCModelComponent):
    display_name: str = "Ollama Embeddings"
    description: str = "Generate embeddings using Ollama models."
    documentation = "https://python.langchain.com/docs/integrations/text_embedding/ollama"
    icon = "Ollama"
    name = "OllamaEmbeddings"

    inputs = [
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            value="nomic-embed-text:latest",
            info="Refer to https://ollama.ai/library for more models.",
            refresh_button=True,
        ),
        MessageTextInput(
            name="base_url",
            display_name="Ollama Base URL",
            value="http://localhost:11434",
        ),
        FloatInput(
            name="temperature",
            display_name="Model Temperature",
            value=0.1,
            advanced=True,
        ),
    ]

    outputs = [
        Output(display_name="Embeddings", name="embeddings", method="build_embeddings"),
    ]

    def update_build_config(self, build_config: dict, field_value: Any, field_name: str | None = None):
        if field_name == "model_name":
            base_url_dict = build_config.get("base_url", {})
            base_url_load_from_db = base_url_dict.get("load_from_db", False)
            base_url_value = base_url_dict.get("value")
            if base_url_load_from_db:
                base_url_value = self.variables(base_url_value)
            elif not base_url_value:
                base_url_value = "http://localhost:11434"
            build_config["model_name"]["options"] = self.get_model(base_url_value + "/api/tags")

    def get_model(self, url: str) -> list[str]:
        try:
            with httpx.Client() as client:
                response = client.get(url)
                response.raise_for_status()
                data = response.json()

                model_names = [model["name"] for model in data.get("models", [])]
                return model_names
        except Exception as e:
            raise ValueError("Could not retrieve models. Please, make sure Ollama is running.") from e

    def build_embeddings(self) -> Embeddings:
        try:
            output = OllamaEmbeddings(
                model=self.model_name,
                base_url=self.base_url,
                temperature=self.temperature,
            )  # type: ignore
        except Exception as e:
            raise ValueError("Could not connect to Ollama API.") from e
        return output
