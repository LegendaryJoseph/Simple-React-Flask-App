FROM node:18-alpine

WORKDIR /react-client

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]