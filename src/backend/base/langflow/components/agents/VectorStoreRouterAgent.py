from typing import Callable

from langchain.agents import create_vectorstore_router_agent
from langchain.agents.agent_toolkits.vectorstore.toolkit import VectorStoreRouterToolkit
from langflow.field_typing import LanguageModel

from langflow.custom import CustomComponent


class VectorStoreRouterAgentComponent(CustomComponent):
    display_name = "VectorStoreRouterAgent"
    description = "Construct an agent from a Vector Store Router."
    name = "VectorStoreRouterAgent"

    def build_config(self):
        return {
            "llm": {"display_name": "LLM"},
            "vectorstoreroutertoolkit": {"display_name": "Vector Store Router Toolkit"},
        }

    def build(self, llm: LanguageModel, vectorstoreroutertoolkit: VectorStoreRouterToolkit) -> Callable:
        return create_vectorstore_router_agent(llm=llm, toolkit=vectorstoreroutertoolkit)
