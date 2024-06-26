FROM langflow:1.0.5-onprem
COPY src/frontend/build /app/.venv/lib/python3.12/site-packages/langflow/frontend

USER user
WORKDIR /app

ENTRYPOINT ["python", "-m", "langflow", "run"]
CMD ["--host", "0.0.0.0", "--port", "7860"]
