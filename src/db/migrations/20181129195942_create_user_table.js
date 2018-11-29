
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments();
            table.string('email').unique();
            table.string('password', 120);
            table.timestamps();
          })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
      ]);
};
