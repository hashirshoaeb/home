FROM node:10.16.0-alpine
#-alpine3.11

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# RUN apk add --update --no-cache python2 alpine-sdk

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
