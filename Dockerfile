FROM node:9-alpine
WORKDIR /api
COPY . .
RUN yarn install
EXPOSE 8000
CMD ["npm", "install", "-g", "knex"]
CMD ["yarn", "watch"]
