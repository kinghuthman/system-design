FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev @types/express

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
