FROM node:18.4.0-alpine

RUN apk add --no-cache bash

RUN npm install


USER node

WORKDIR /home/node/app