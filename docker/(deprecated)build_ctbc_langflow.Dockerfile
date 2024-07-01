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

RUN pip download pybind11 -d pypi/wheels && pip download poetry-core -d pypi/wheels && pip download cmake -d pypi/wheels

# Install local pypi server
RUN pip install --no-index --find-links=pypi/install/ pypiserver && mkdir -p pypi/wheels && mkdir -p pypi/requirements

# Building Frontend & base
# Step 1: export env vars and build base
# RUN export $(grep -v '^#' .env | xargs)
RUN make build_frontend
RUN make build_langflow_base

# Step 2: install all dependencies build on premise
RUN (pypi-server run -p 8080 /app/pypi/wheels &) \
        && poetry install --without dev --sync -E deploy -E couchbase -E cassio \
        && poetry build -f wheel \
        && poetry run pip install dist/*.whl

################################
# RUNTIME
# Setup user, utilities and copy the virtual environment only
################################

FROM langflow:ctbc-base as runtime

LABEL org.opencontainers.image.title=langflow
LABEL org.opencontainers.image.authors=['Langflow']
LABEL org.opencontainers.image.licenses=MIT
LABEL org.opencontainers.image.url=https://github.com/langflow-ai/langflow
LABEL org.opencontainers.image.source=https://github.com/langflow-ai/langflow

RUN useradd user -u 1000 -g 0 --no-create-home --home-dir /app/data
COPY --from=builder-base --chown=1000 /app/.venv /app/.venv
ENV PATH="/app/.venv/bin:${PATH}"

USER user
WORKDIR /app

ENTRYPOINT ["python", "-m", "langflow", "run"]
CMD ["--host", "0.0.0.0", "--port", "7860"]