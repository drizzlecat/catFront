docker run -it --rm -v "$(pwd)":/app create-react-app /bin/bash -c "create-react-app my-react-app"
docker build -t my-react-app .
docker run -p 3007:3000 my-react-app
docker-compose build
docker-compose run react create-react-app my-react-app .
docker-compose up --build
