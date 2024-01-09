# Build stage
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Specify the port the app will use (optional)
EXPOSE 3000

CMD ["npm", "start"]
