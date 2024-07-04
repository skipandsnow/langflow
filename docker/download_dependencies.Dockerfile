################################
# Download all build dependencies to local
################################

FROM langflow:base

# Copy the entire project into the build image
WORKDIR /app
COPY pyproject.toml poetry.lock README.md Makefile ./
COPY src/ ./src
COPY scripts/ ./scripts
COPY pypi/ ./pypi

# Install local pypi server & relevent build tools
RUN pip install --no-index --find-links=pypi/install/ pypiserver && mkdir -p pypi/wheels
RUN pip download setuptools wheel pybind11 poetry-core cmake -d pypi/wheels/

# ================================= #

# Complile and build frontend
RUN make init
RUN make build base=true

# Update main poetry to local
RUN poetry lock --no-update \
    && poetry install --without dev --sync -E deploy -E couchbase -E cassio