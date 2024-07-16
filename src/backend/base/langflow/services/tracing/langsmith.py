import os
import traceback
import types
from datetime import datetime, timezone
from typing import TYPE_CHECKING, Any, Dict, Optional
from uuid import UUID

from loguru import logger

from langflow.schema.data import Data
from langflow.services.tracing.base import BaseTracer
from langflow.services.tracing.schema import Log

if TYPE_CHECKING:
    from langflow.graph.vertex.base import Vertex


class LangSmithTracer(BaseTracer):
    def __init__(self, trace_name: str, trace_type: str, project_name: str, trace_id: UUID):
        from langsmith.run_trees import RunTree

        self.trace_name = trace_name
        self.trace_type = trace_type
        self.project_name = project_name
        self.trace_id = trace_id
        try:
            self._run_tree = RunTree(
                project_name=self.project_name,
                name=self.trace_name,
                run_type=self.trace_type,
                id=self.trace_id,
            )
            self._run_tree.add_event({"name": "Start", "time": datetime.now(timezone.utc).isoformat()})
            self._children: dict[str, RunTree] = {}
            self._ready = self.setup_langsmith()
        except Exception as e:
            logger.debug(f"Error setting up LangSmith tracer: {e}")
            self._ready = False

    @property
    def ready(self):
        return self._ready

    def setup_langsmith(self):
        try:
            from langsmith import Client

            self._client = Client()
        except ImportError:
            logger.error("Could not import langsmith. Please install it with `pip install langsmith`.")
            return False
        os.environ["LANGCHAIN_TRACING_V2"] = "true"
        return True

    def add_trace(
        self,
        trace_id: str,
        trace_name: str,
        trace_type: str,
        inputs: Dict[str, Any],
        metadata: Dict[str, Any] | None = None,
        vertex: Optional["Vertex"] = None,
    ):
        if not self._ready:
            return
        processed_inputs = {}
        if inputs:
            processed_inputs = self._convert_to_langchain_types(inputs)
        child = self._run_tree.create_child(
            name=trace_name,
            run_type=trace_type,  # type: ignore[arg-type]
            inputs=processed_inputs,
        )
        if metadata:
            child.add_metadata(self._convert_to_langchain_types(metadata))
        self._children[trace_name] = child
        self._child_link: dict[str, str] = {}

    def _convert_to_langchain_types(self, io_dict: Dict[str, Any]):
        converted = {}
        for key, value in io_dict.items():
            converted[key] = self._convert_to_langchain_type(value)
        return converted

    def _convert_to_langchain_type(self, value):
        from langflow.schema.message import Message

        if isinstance(value, dict):
            for key, _value in value.copy().items():
                _value = self._convert_to_langchain_type(_value)
                value[key] = _value
        elif isinstance(value, list):
            value = [self._convert_to_langchain_type(v) for v in value]
        elif isinstance(value, Message):
            if "prompt" in value:
                value = value.load_lc_prompt()
            elif value.sender:
                value = value.to_lc_message()
            else:
                value = value.to_lc_document()
        elif isinstance(value, Data):
            value = value.to_lc_document()
        elif isinstance(value, types.GeneratorType):
            # generator is not serializable, also we can't consume it
            value = str(value)
        return value

    def end_trace(
        self,
        trace_id: str,
        trace_name: str,
        outputs: Dict[str, Any] | None = None,
        error: Exception | None = None,
        logs: list[Log | dict] = [],
    ):
        child = self._children[trace_name]
        raw_outputs = {}
        processed_outputs = {}
        if outputs:
            raw_outputs = outputs
            processed_outputs = self._convert_to_langchain_types(outputs)
        if logs:
            child.add_metadata(self._convert_to_langchain_types({"logs": {log.get("name"): log for log in logs}}))
        child.add_metadata(self._convert_to_langchain_types({"outputs": raw_outputs}))
        child.end(outputs=processed_outputs, error=self._error_to_string(error))
        if error:
            child.patch()
        else:
            child.post()
        self._child_link[trace_name] = child.get_url()

    def _error_to_string(self, error: Optional[Exception]):
        error_message = None
        if error:
            string_stacktrace = traceback.format_exception(error)
            error_message = f"{error.__class__.__name__}: {error}\n\n{string_stacktrace}"
        return error_message

    def end(
        self,
        inputs: dict[str, Any],
        outputs: Dict[str, Any],
        error: Exception | None = None,
        metadata: dict[str, Any] | None = None,
    ):
        self._run_tree.add_metadata({"inputs": inputs})
        if metadata:
            self._run_tree.add_metadata(metadata)
        self._run_tree.end(outputs=outputs, error=self._error_to_string(error))
        self._run_tree.post()
        self._run_link = self._run_tree.get_url()
