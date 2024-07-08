# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

################################
# RUNTIME
# Setup user, utilities and copy the virtual environment only
################################
# 1. use python:3.12.3-slim as the base image until https://github.com/pydantic/pydantic-core/issues/1292 gets resolved
FROM python:3.12.3-slim as runtime

RUN apt-get -y update \
    && apt-get install vim -y \
    && apt-get install --no-install-recommends -y \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*