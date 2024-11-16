cd /home/skipandsnow/Github/langflow
docker build -t langflow:v1.1.0-ctbc -f docker/build_and_push.Dockerfile .
docker save docker.io/library/langflow:v1.1.0-ctbc -o /mnt/d/ftp/langflow-v1.1.0-ctbc.tar