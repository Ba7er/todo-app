FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install -g typescript

RUN npm install

COPY . .

EXPOSE 9500

CMD [ "npm", "run", "dev" ]