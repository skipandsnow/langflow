# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

################################
# BUILDER-BASE
# Used to build deps + create our virtual environment
################################

# 1. use python:3.12.3-slim as the base image until https://github.com/pydantic/pydantic-core/issues/1292 gets resolved
# 2. do not add --platform=$BUILDPLATFORM because the pydantic binaries must be resolved for the final architecture
FROM python:3.12.3-slim AS builder-base

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
    build-essential cmake gcc g++ libevent-dev libssl-dev zlib1g-dev libudev1 \
    # gcc
    gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# installs nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
RUN . ~/.bashrc && nvm install --lts

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
RUN python -m pip install requests --user

# Set this config to prevent slow internet connection timeout
# RUN npm config set maxsockets 1

# Install frontend dependencies
RUN . ~/.bashrc && make install_frontend

# # Prepare backend dependencies
RUN poetry lock --no-update
RUN poetry install --without dev --sync -E deploy -E couchbase -E cassio

# Prepare compile wheels
RUN pip install pypiserver
RUN mkdir -p pypi/wheels && pip download setuptools wheel pybind11 poetry-core cmake -d pypi/wheels/