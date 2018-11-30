const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {email: faker.internet.email(), password: 'sansajn', created_at: new Date()},
    {email: faker.internet.email(), password: 'sansajn', created_at: new Date()},
    {email: faker.internet.email(), password: 'sansajn', created_at: new Date()}
  ]);
};
