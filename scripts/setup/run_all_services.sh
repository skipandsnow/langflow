#!/bin/bash

# Run qdrant
docker run -d -p 6333:6333 qdrant/qdrant

# Run postgres
docker run --name postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=llm -e POSTGRES_USER=llm postgres:16.3

# Run ollama
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama

# Run openldap
docker run -d -p 6333:6333 qdrant/qdrant

# Run openldap
docker run -p 1389:1389 -d --rm --name openldap \
--env LDAP_ADMIN_USERNAME=admin \
--env LDAP_ADMIN_PASSWORD=admin \
--env LDAP_USERS=z00040866 \
--env LDAP_PASSWORDS=z00040866 \
--env LDAP_ROOT=dc=example,dc=org \
--env LDAP_ADMIN_DN=cn=admin,dc=example,dc=org \
bitnami/openldap:latest