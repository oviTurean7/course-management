# course-management
Simple NODE JS API used for docker practice



# Sesson 3

docker network list

docker network create --driver=bridge my-custom-demo-network

docker inspect my-custom-demo-network

docker run -p 3000:3000 --mount type=bind,source=./data,target=/home/customuser/app/data --name demo-server demo-server:1

# Session 4

docker compose up - se ruleaza compose.yaml - se pornesc toate serviceurile 
