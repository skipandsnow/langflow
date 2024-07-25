#!/bin/bash

# Update the latest dependecies
poetry lock --no-update
# Install frontend dependencies
make install_frontendci
# Install backend dependencies
make install_backend