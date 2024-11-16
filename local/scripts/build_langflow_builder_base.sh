#!/bin/bash

# Build langflow builder_base
docker build --no-cache -t langflow-builder-base:1.0.15 -f local/docker/build_langflow_builder_base.Dockerfile .