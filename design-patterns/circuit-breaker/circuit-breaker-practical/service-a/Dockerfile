FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev @types/express
RUN npm i --save-dev @types/opossum

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
