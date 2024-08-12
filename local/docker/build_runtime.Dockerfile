# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

################################
# RUNTIME
# Setup user, utilities and copy the virtual environment only
################################
# 1. use python:3.12.3-slim as the base image until https://github.com/pydantic/pydantic-core/issues/1292 gets resolved
FROM python:3.12.3-slim AS runtime

RUN apt-get -y update \
    && apt-get install vim -y \
    && apt-get install --no-install-recommends -y gpg\
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install mssql driver
    RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg
RUN curl https://packages.microsoft.com/config/debian/12/prod.list | tee /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18
RUN echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bashrc
RUN apt-get install -y unixodbc-dev libgssapi-krb5-2