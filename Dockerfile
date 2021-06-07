FROM node:10.16.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
