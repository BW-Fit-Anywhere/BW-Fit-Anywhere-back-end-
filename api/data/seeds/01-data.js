exports.seed = async function (knex) {
  await knex('roles').truncate()
  await knex('users').truncate()
  await knex('roles').insert([{
    role_name: 'instructor'
  },
  {
    role_name: 'client'
  }
])
  await knex('users').insert([
    {
      username: 'tom',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
    },
  ])
}
