#!/bin/bash
# Bump this version every time you need update containers
TAG="0.1.0"

# Build and promote the image to integration
docker build . -t jjp1023/home:$TAG
docker push jjp1023/home:$TAG
