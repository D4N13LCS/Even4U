FROM node:20.18-alpine

WORKDIR /app

COPY ./backend/package.json ./backend/package-lock.json ./

RUN npm install

COPY ./backend/ .

EXPOSE 3000

CMD [ "npm", "start" ]