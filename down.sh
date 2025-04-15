#!/bin/bash

docker-compose down
docker rm container.notesapp.com
docker rmi image.notesapp.com

echo "Exit Successfully."