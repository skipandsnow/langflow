#!/bin/bash

# Run qdrant
docker run -d -p 6333:6333 qdrant/qdrant

# Run postgres
docker run --name postgres -d -e POSTGRES_PASSWORD=llm -e POSTGRES_USER=llm postgres:16.3

# Run openldap
docker run -d -p 6333:6333 qdrant/qdrant