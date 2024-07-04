from typing import Union

from langchain.agents.agent_toolkits.vectorstore.toolkit import VectorStoreInfo, VectorStoreToolkit

from langflow.custom import CustomComponent
from langflow.field_typing import LanguageModel, Tool


class VectorStoreToolkitComponent(CustomComponent):
    display_name = "VectorStoreToolkit"
    description = "Toolkit for interacting with a Vector Store."
    name = "VectorStoreToolkit"

    def build_config(self):
        return {
            "vectorstore_info": {"display_name": "Vector Store Info"},
            "llm": {"display_name": "LLM"},
        }

    def build(
        self,
        vectorstore_info: VectorStoreInfo,
        llm: LanguageModel,
    ) -> Union[Tool, VectorStoreToolkit]:
        return VectorStoreToolkit(vectorstore_info=vectorstore_info, llm=llm)
