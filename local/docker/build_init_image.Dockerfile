FROM registry.access.redhat.com/ubi8/openjdk-17-runtime:1.20-3
COPY utils ./utilities
RUN chmod u+x -R utils