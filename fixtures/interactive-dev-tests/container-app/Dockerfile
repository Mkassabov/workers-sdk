FROM node:22-alpine

WORKDIR /usr/src/app
RUN echo '{"name": "simple-node-app", "version": "1.0.0"}' > package.json
RUN npm install

COPY ./container-src/simple-node-app.js app.js
EXPOSE 8080
