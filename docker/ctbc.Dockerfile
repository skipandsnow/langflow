FROM langflow:v1.0.19.post2-ctbc
RUN touch .env
CMD ["langflow", "run", "--env-file", ".env"]
