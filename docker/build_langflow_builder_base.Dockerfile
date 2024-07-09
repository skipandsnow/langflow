# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

################################
# BUILDER-BASE
# Used to build deps + create our virtual environment
################################

# 1. use python:3.12.3-slim as the base image until https://github.com/pydantic/pydantic-core/issues/1292 gets resolved
# 2. do not add --platform=$BUILDPLATFORM because the pydantic binaries must be resolved for the final architecture
FROM python:3.12.3-slim as builder-base

ENV PYTHONDONTWRITEBYTECODE=1 \
    \
    # pip
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    \
    # poetry
    # https://python-poetry.org/docs/configuration/#using-environment-variables
    POETRY_VERSION=1.8.2 \
    # make poetry install to this location
    POETRY_HOME="/opt/poetry" \
    # make poetry create the virtual environment in the project's root
    # it gets named `.venv`
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    # do not ask any interactive question
    POETRY_NO_INTERACTION=1 \
    \
    # paths
    # this is where our requirements + virtual environment will live
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

# Update latest libraries
RUN apt-get update \
    && apt-get install vim -y \
    && apt-get install --no-install-recommends -y \
    # deps for installing poetry
    curl \
    # deps for building python deps
    build-essential npm \
    # gcc
    gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN --mount=type=cache,target=/root/.cache \
curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="${POETRY_HOME}/bin:${PATH}"

# Work folder to /app
WORKDIR /app

# Copy the entire project into the build image
COPY pyproject.toml poetry.lock README.md ./
COPY src/ ./src
COPY scripts ./scripts
COPY Makefile .env ./
COPY pypi ./pypi
RUN python -m pip install requests --user && cd ./scripts && python update_dependencies.py
RUN npm config set maxsockets 1

# Prepare frontend dependencies
RUN install_frontendci

# # Prepare backend dependencies
RUN poetry lock --no-update
RUN poetry install --without dev --sync -E deploy -E couchbase -E cassio

# Prepare compile wheels
RUN pip install --no-index --find-links=pypi/install/ pypi-server
RUN mkdir -p pypi/wheels && pip download setuptools wheel pybind11 poetry-core cmake -d pypi/wheels/