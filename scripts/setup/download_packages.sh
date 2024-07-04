#!/bin/bash

################################
# 1. Execute this shell in the project root folder, you will see new folder `dist`` created at the root folder
# 2. Copy the dist folder to your on premise project at the same location
# 3. Execute the build_offline_langflow.Dockerfile
################################

# Download base & main dependencies in docker
# docker build -t langflow:download-dependencies -f docker/download_dependencies.Dockerfile .

# cp dependencies from docker image to local
DOCKER_PS_ID="$(docker run -d langflow:download-dependencies bash)"

# download installed libraries
mkdir -p dist && docker cp $DOCKER_PS_ID:/app/.venv dist/.venv
mkdir -p pypi/wheels && docker cp $DOCKER_PS_ID:/app/pypi/wheels ./pypi/wheels/

# download node modules for frontend
rm -rf src/frontend/node_modules/*
docker cp $DOCKER_PS_ID:/app/src/frontend/node_modules ./src/frontend/

# rm docker container after works
docker rm $DOCKER_PS_ID