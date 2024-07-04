################################
# BUILDER-BASE
# Used to build deps + create our virtual environment
################################

FROM langflow:ctbc-base as builder-base

# Copy the entire project into the build image
WORKDIR /app
COPY pyproject.toml poetry.lock README.md ./
COPY src/ ./src
COPY scripts ./scripts
COPY Makefile .env ./
COPY dist/.venv/ ./.venv
COPY pypi ./pypi
# RUN python -m pip install requests --user && cd ./scripts && python update_dependencies.py

RUN pip install --no-index --find-links=pypi/install/ pypiserver

# Building frontend & langflow-base
# Step 1: export env vars and build base
RUN export $(grep -v '^#' .env | xargs)
# RUN make build base=true
RUN build_frontend

# Step 2: build langflow
RUN poetry build -f wheel \
    && (pypi-server run -p 8080 ./pypi/wheels &) \
    && poetry run pip install dist/*.whl -i http://localhost:8080/simple/

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