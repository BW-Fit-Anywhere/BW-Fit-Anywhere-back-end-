exports.up = function (knex) {
  return knex.schema
    .createTable('roles', roles => {
      roles.increments('role_id')
      roles.string('role_name', 32).notNullable().unique()
    })
    .createTable('users', users => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.integer('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roles')
        .onDelete('CASCADE')
    })
    .createTable('classes', classes => {
      classes.increments('class_id')
      classes.string('name', 250).notNullable()
      classes.string('type', 150).notNullable()
      classes.string('start_time', 100).notNullable()
      classes.string('intensity_level', 150).notNullable()
      classes.string('location', 250).notNullable()
      classes.integer('number_registered').notNullable()
      classes.integer('max_class_size').notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
}