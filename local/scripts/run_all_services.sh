#!/bin/bash
docker build -t langflow-builder-base:1.0.9-v5 -f docker/build_langflow_builder_base.Dockerfile .

# Run qdrant
docker pull qdrant/qdrant:v1.10.1
docker run -d -p 6333:6333 qdrant/qdrant:v1.10.1

# Run postgres
docker run --name postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=llm -e POSTGRES_USER=llm postgres:16.3

# Run ollama
docker pull ollama/ollama:0.2.5
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:0.2.5

# Run openldap
docker run -p 1389:1389 -d --rm --name openldap \
--env LDAP_ADMIN_USERNAME=admin \
--env LDAP_ADMIN_PASSWORD=admin \
--env LDAP_USERS=z00040866 \
--env LDAP_PASSWORDS=z00040866 \
--env LDAP_ROOT=dc=example,dc=org \
--env LDAP_ADMIN_DN=cn=admin,dc=example,dc=org \
bitnami/openldap:latest

# Code Server
docker run -it --name code-server -p 127.0.0.1:8080:8080 \
  -v "$HOME/.config:/home/coder/.config" \
  -v "$PWD:/home/coder/project" \
  -u "$(id -u):$(id -g)" \
  codercom/code-server:ubuntu-python3.12
  code-server "--bind-addr=0.0.0.0:8080"

# Set git safe
git config --global --add safe.directory /app/langflow

# Local docker run code server
docker run -it -d --name code-server -p 8080:8080 -v "$HOME/.config:/root/.config"  -v "$PWD:/app" code-server:b2fdc7b27e8a