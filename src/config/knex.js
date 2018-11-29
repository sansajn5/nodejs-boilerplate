/**
 * File that handles database settings
 */
const { knexSnakeCaseMappers } = require("objection");

const options = {
    client: 'mysql',
    connection: {
      host : process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || '3306',
      user : process.env.DATABASE_USER || 'root',
      password : process.env.DATABASE_PASSWORD || 'root',
      database : process.env.DATABASE_NAME || 'hermes_transport',
      charset: 'utf8'
    },
    ...knexSnakeCaseMappers()
};

module.exports = options;