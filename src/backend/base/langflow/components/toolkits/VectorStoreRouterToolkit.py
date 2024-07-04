from typing import List, Union

from langchain.agents.agent_toolkits.vectorstore.toolkit import VectorStoreInfo, VectorStoreRouterToolkit

from langflow.custom import CustomComponent
from langflow.field_typing import LanguageModel, Tool


class VectorStoreRouterToolkitComponent(CustomComponent):
    display_name = "VectorStoreRouterToolkit"
    description = "Toolkit for routing between Vector Stores."
    name = "VectorStoreRouterToolkit"

    def build_config(self):
        return {
            "vectorstores": {"display_name": "Vector Stores"},
            "llm": {"display_name": "LLM"},
        }

    def build(self, vectorstores: List[VectorStoreInfo], llm: LanguageModel) -> Union[Tool, VectorStoreRouterToolkit]:
        print("vectorstores", vectorstores)
        print("llm", llm)
        return VectorStoreRouterToolkit(vectorstores=vectorstores, llm=llm)
