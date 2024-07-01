################################
# BUILDER-BASE
# Used to build deps + create our virtual environment
################################

FROM langflow:ctbc-base as builder-base

# Copy the entire project into the build image
WORKDIR /app
COPY pyproject.toml poetry.lock README.md ./
COPY src/ ./src
COPY pypi/ ./pypi
COPY scripts ./scripts
COPY Makefile .env ./


# Install local pypi server
RUN pip install --no-index --find-links=pypi/install/ pypiserver && mkdir -p pypi/wheels && mkdir -p pypi/requirements

# Building Frontend & base
# Step 1: export env vars and build base
RUN export $(grep -v '^#' .env | xargs)
# RUN make build_frontend
# RUN make build_langflow_base

# # Step 2: install all dependencies build on premise
# RUN (pypi-server run -p 8080 /app/pypi/wheels &) \
#         && poetry install --without dev --sync -E deploy -E couchbase -E cassio \
#         && poetry build -f wheel \
#         && poetry run pip install dist/*.whl
