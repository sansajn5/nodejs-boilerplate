/**
 * Exposing database instance
 */
const config = require('../config/knex');
module.exports = require('knex')(config);