FROM node:16.13.2-alpine3.15

RUN apk add --no-cache bash

USER node

WORKDIR /home/gabriel/node/app
