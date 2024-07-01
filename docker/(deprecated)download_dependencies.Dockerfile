################################
# Download all build dependencies to local
################################

FROM langflow:ctbc-base

# Copy the entire project into the build image
WORKDIR /app
COPY pyproject.toml poetry.lock README.md Makefile ./
COPY src/ ./src
COPY pypi/ ./pypi

# Install local pypi & Setup pypi folders
RUN pip install --no-index --find-links=pypi/install/ pypiserver && mkdir -p pypi/wheels && mkdir -p pypi/requirements

# Download base dependencies
RUN cd src/backend/base \
    && poetry lock --no-update \
    && poetry export --with-credentials --all-extras > ../../../pypi/requirements/requirements-base.txt  \
    && pip download -r ../../../pypi/requirements/requirements-base.txt -d ../../../pypi/wheels --exists-action i

# Download main dependencies
RUN poetry lock --no-update \
    && poetry export --with-credentials --without-hashes --without dev --all-extras > pypi/requirements/requirements-main.txt \
    && pip download -r pypi/requirements/requirements-main.txt -d pypi/wheels --exists-action i

RUN pip download setuptools -d pypi/wheels/ && pip download wheel -d pypi/wheels/

# # ================================= #

# Update base poetry to local
RUN (pypi-server run -p 8080 ./pypi/wheels &) \
    && cd src/backend/base \
    && poetry source add --priority=primary local_pypi http://localhost:8080/simple/ \
    && poetry lock --no-update

# Update main poetry to local
RUN (pypi-server run -p 8080 ./pypi/wheels &) \
    && poetry source add --priority=primary local_pypi http://localhost:8080/simple/ \
    && poetry lock --no-update

# ================================= #
# Download node modules
RUN make install_frontendci