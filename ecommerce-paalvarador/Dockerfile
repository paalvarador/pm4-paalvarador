FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start"]