from loguru import logger

from langflow.base.vectorstores.model import LCVectorStoreComponent
from langflow.io import (
    BoolInput,
    DropdownInput,
    HandleInput,
    IntInput,
    MultilineInput,
    SecretStrInput,
    StrInput,
    DataInput,
)
from langflow.schema import Data


class AstraVectorStoreComponent(LCVectorStoreComponent):
    display_name: str = "Astra DB"
    description: str = "Implementation of Vector Store using Astra DB with search capabilities"
    documentation: str = "https://python.langchain.com/docs/integrations/vectorstores/astradb"
    icon: str = "AstraDB"

    inputs = [
        StrInput(
            name="collection_name",
            display_name="Collection Name",
            info="The name of the collection within Astra DB where the vectors will be stored.",
        ),
        SecretStrInput(
            name="token",
            display_name="Astra DB Application Token",
            info="Authentication token for accessing Astra DB.",
            value="ASTRA_DB_APPLICATION_TOKEN",
        ),
        SecretStrInput(
            name="api_endpoint",
            display_name="API Endpoint",
            info="API endpoint URL for the Astra DB service.",
            value="ASTRA_DB_API_ENDPOINT",
        ),
        MultilineInput(
            name="search_input",
            display_name="Search Input",
        ),
        DataInput(
            name="ingest_data",
            display_name="Ingest Data",
            is_list=True,
        ),
        StrInput(
            name="namespace",
            display_name="Namespace",
            info="Optional namespace within Astra DB to use for the collection.",
            advanced=True,
        ),
        DropdownInput(
            name="metric",
            display_name="Metric",
            info="Optional distance metric for vector comparisons in the vector store.",
            options=["cosine", "dot_product", "euclidean"],
            advanced=True,
        ),
        IntInput(
            name="batch_size",
            display_name="Batch Size",
            info="Optional number of data to process in a single batch.",
            advanced=True,
        ),
        IntInput(
            name="bulk_insert_batch_concurrency",
            display_name="Bulk Insert Batch Concurrency",
            info="Optional concurrency level for bulk insert operations.",
            advanced=True,
        ),
        IntInput(
            name="bulk_insert_overwrite_concurrency",
            display_name="Bulk Insert Overwrite Concurrency",
            info="Optional concurrency level for bulk insert operations that overwrite existing data.",
            advanced=True,
        ),
        IntInput(
            name="bulk_delete_concurrency",
            display_name="Bulk Delete Concurrency",
            info="Optional concurrency level for bulk delete operations.",
            advanced=True,
        ),
        DropdownInput(
            name="setup_mode",
            display_name="Setup Mode",
            info="Configuration mode for setting up the vector store, with options like 'Sync', 'Async', or 'Off'.",
            options=["Sync", "Async", "Off"],
            advanced=True,
            value="Sync",
        ),
        BoolInput(
            name="pre_delete_collection",
            display_name="Pre Delete Collection",
            info="Boolean flag to determine whether to delete the collection before creating a new one.",
            advanced=True,
        ),
        StrInput(
            name="metadata_indexing_include",
            display_name="Metadata Indexing Include",
            info="Optional list of metadata fields to include in the indexing.",
            advanced=True,
        ),
        HandleInput(
            name="embedding",
            display_name="Embedding",
            input_types=["Embeddings"],
        ),
        StrInput(
            name="metadata_indexing_exclude",
            display_name="Metadata Indexing Exclude",
            info="Optional list of metadata fields to exclude from the indexing.",
            advanced=True,
        ),
        StrInput(
            name="collection_indexing_policy",
            display_name="Collection Indexing Policy",
            info="Optional dictionary defining the indexing policy for the collection.",
            advanced=True,
        ),
        DropdownInput(
            name="search_type",
            display_name="Search Type",
            options=["Similarity", "MMR"],
            value="Similarity",
            advanced=True,
        ),
        IntInput(
            name="number_of_results",
            display_name="Number of Results",
            info="Number of results to return.",
            advanced=True,
            value=4,
        ),
    ]

    def build_vector_store(self):
        try:
            from langchain_astradb import AstraDBVectorStore
            from langchain_astradb.utils.astradb import SetupMode
        except ImportError:
            raise ImportError(
                "Could not import langchain Astra DB integration package. "
                "Please install it with `pip install langchain-astradb`."
            )

        try:
            if not self.setup_mode:
                self.setup_mode = self._inputs["setup_mode"].options[0]

            setup_mode_value = SetupMode[self.setup_mode.upper()]
        except KeyError:
            raise ValueError(f"Invalid setup mode: {self.setup_mode}")

        vector_store_kwargs = {
            "embedding": self.embedding,
            "collection_name": self.collection_name,
            "token": self.token,
            "api_endpoint": self.api_endpoint,
            "namespace": self.namespace or None,
            "metric": self.metric or None,
            "batch_size": self.batch_size or None,
            "bulk_insert_batch_concurrency": self.bulk_insert_batch_concurrency or None,
            "bulk_insert_overwrite_concurrency": self.bulk_insert_overwrite_concurrency or None,
            "bulk_delete_concurrency": self.bulk_delete_concurrency or None,
            "setup_mode": setup_mode_value,
            "pre_delete_collection": self.pre_delete_collection or False,
        }

        if self.metadata_indexing_include:
            vector_store_kwargs["metadata_indexing_include"] = self.metadata_indexing_include
        elif self.metadata_indexing_exclude:
            vector_store_kwargs["metadata_indexing_exclude"] = self.metadata_indexing_exclude
        elif self.collection_indexing_policy:
            vector_store_kwargs["collection_indexing_policy"] = self.collection_indexing_policy

        try:
            vector_store = AstraDBVectorStore(**vector_store_kwargs)
        except Exception as e:
            raise ValueError(f"Error initializing AstraDBVectorStore: {str(e)}") from e

        self.status = self._astradb_collection_to_data(vector_store.collection)
        return vector_store

    def _add_documents_to_vector_store(self, vector_store):
        documents = []
        for _input in self.ingest_data or []:
            if isinstance(_input, Data):
                documents.append(_input.to_lc_document())
            else:
                raise ValueError("Vector Store Inputs must be Data objects.")

        if documents and self.embedding is not None:
            logger.debug(f"Adding {len(documents)} documents to the Vector Store.")
            try:
                vector_store.add_documents(documents)
            except Exception as e:
                raise ValueError(f"Error adding documents to AstraDBVectorStore: {str(e)}") from e
        else:
            logger.debug("No documents to add to the Vector Store.")

    def search_documents(self):
        vector_store = self.build_vector_store()

        logger.debug(f"Search input: {self.search_input}")
        logger.debug(f"Search type: {self.search_type}")
        logger.debug(f"Number of results: {self.number_of_results}")

        if self.search_input and isinstance(self.search_input, str) and self.search_input.strip():
            try:
                if self.search_type == "Similarity":
                    docs = vector_store.similarity_search(
                        query=self.search_input,
                        k=self.number_of_results,
                    )
                elif self.search_type == "MMR":
                    docs = vector_store.max_marginal_relevance_search(
                        query=self.search_input,
                        k=self.number_of_results,
                    )
                else:
                    raise ValueError(f"Invalid search type: {self.search_type}")
            except Exception as e:
                raise ValueError(f"Error performing search in AstraDBVectorStore: {str(e)}") from e

            logger.debug(f"Retrieved documents: {len(docs)}")

            data = [Data.from_document(doc) for doc in docs]
            logger.debug(f"Converted documents to data: {len(data)}")
            self.status = data
            return data
        else:
            logger.debug("No search input provided. Skipping search.")
            return []

    def _astradb_collection_to_data(self, collection):
        data = []
        data_dict = collection.find()
        if data_dict and "data" in data_dict:
            data_dict = data_dict["data"].get("documents", [])

        for item in data_dict:
            data.append(Data(content=item["content"]))
        return data
