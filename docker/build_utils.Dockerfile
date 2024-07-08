FROM busybox:stable
RUN apt update && apt install vim openjdk-17-jre-headless -y