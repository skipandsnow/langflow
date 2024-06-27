# syntax=docker/dockerfile:1
# Keep this syntax directive! It's used to enable Docker BuildKit

FROM langflow:ctbc-base

# Copy the entire project into the build image
WORKDIR /app
COPY pyproject.toml poetry.lock README.md ./
COPY src/ ./src
COPY scripts ./scripts
COPY Makefile ./

# # Build base
# RUN make build base=true

# # Update PATH with home/user/.local/bin
# ENV PATH="/home/user/.local/bin:${PATH}"
# RUN cd src/backend/base && $POETRY_HOME/bin/poetry build

# COPY scripts/ ./scripts
# RUN python -m pip install requests --user && cd ./scripts && python update_dependencies.py

# ENV PATH="/app/.venv/bin:${PATH}"

# USER user
# WORKDIR /app

# ENTRYPOINT ["python", "-m", "langflow", "run"]
# CMD ["--host", "0.0.0.0", "--port", "7860"]｛