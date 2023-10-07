# create a file named Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

CMD ["npm", "start"]