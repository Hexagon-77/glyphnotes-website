FROM node

WORKDIR /app

COPY package.json .
RUN npm i
COPY . .
EXPOSE 8792

CMD ["npm", "run", "dev"]