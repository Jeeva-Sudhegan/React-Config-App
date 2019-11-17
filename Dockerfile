FROM ubuntu:latest
RUN apt-get update -y 
RUN apt-get install -y nodejs && apt-get install -y npm
RUN mkdir -p /app
EXPOSE 8080
COPY . /app
WORKDIR /app
RUN npm install