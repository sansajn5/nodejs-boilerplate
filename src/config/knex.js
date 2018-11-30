/**
 * File that handles database settings
 */
const { knexSnakeCaseMappers } = require("objection");
// Fix for dotenv connection when using knex
require('dotenv').config({path: '../../.env'});

const options = {
    client: 'mysql',
    connection: {
      host : process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user : process.env.DATABASE_USER,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
      charset: 'utf8'
    },
    ...knexSnakeCaseMappers()
};

module.exports = options;