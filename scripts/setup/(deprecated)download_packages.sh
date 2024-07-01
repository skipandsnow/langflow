#!/bin/bash

################################
# 1. Execute this shell in the project root folder, you will see new folder `dist`` created at the root folder
# 2. Copy the dist folder to your on premise project at the same location
# 3. Execute the build_offline_langflow.Dockerfile
################################

# Download base & main dependencies in docker
docker build -t langflow:download-dependencies -f docker/download_pypi_dependencies.Dockerfile .

# cp dependencies from docker image to local
DOCKER_PS_ID="$(docker run -d langflow:download-dependencies bash)"

# download wheels
docker cp $DOCKER_PS_ID:/app/pypi .

# download poetry dependencies configuration files
mkdir -p ./dist/base/
docker cp $DOCKER_PS_ID:/app/src/backend/base/pyproject.toml ./dist/base/pyproject.toml
docker cp $DOCKER_PS_ID:/app/src/backend/base/poetry.lock ./dist/base/poetry.lock

mkdir -p ./dist/main/
docker cp $DOCKER_PS_ID:/app/pyproject.toml ./dist/main/pyproject.toml
docker cp $DOCKER_PS_ID:/app/poetry.lock ./dist/main/poetry.lock

# download node mmdules for frontend
rm -rf src/frontend/node_modules/*
docker cp $DOCKER_PS_ID:/app/src/frontend/node_modules ./src/frontend/

# rm docker container after works
docker rm $DOCKER_PS_ID