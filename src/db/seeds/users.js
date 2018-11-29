const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {email: faker.internet.email(), password: 'nemanja', created_at: new Date()},
    {email: faker.internet.email(), password: 'nemanja'},
    {email: faker.internet.email(), password: 'nemanja'}
  ]);
};
