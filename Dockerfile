FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get -y install nodejs && apt-get -y install npm
RUN mkdir -p /app
EXPOSE 8080
COPY . /app
WORKDIR /app
RUN npm install
CMD [ "npm" , "run" , "start"]