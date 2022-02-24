# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM debian:latest

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Install node and npm
RUN apt-get update && apt-get install -y \
    nodejs \
    npm

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 5050

# Finally runs the application
CMD [ "npm", "run", "start" ]
