FROM nginx:latest
RUN apt-get update -y
RUN apt-get -y install nodejs && apt-get -y install npm
COPY . /app
RUN npm install
RUN npm run build
WORKDIR /app/dist
EXPOSE 8080
RUN npm install --save serve
COPY /app/dist .
CMD [ "serve" , "" , "" , "" ]