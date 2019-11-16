FROM node:latest
RUN npm install -g npm@latest
RUN mkdir -p /app
EXPOSE 8080
COPY . /app
WORKDIR /app
RUN npm install