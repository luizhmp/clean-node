FROM node:22
WORKDIR /usr/src/clean-node
COPY ./package.json .
RUN npm install --only=prod