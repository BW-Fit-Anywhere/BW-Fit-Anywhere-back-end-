exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE roles CASCADE')
  await knex('users').truncate()
  await knex('classes').truncate()
  await knex('roles').insert([
    { role_name: 'administator' },
    { role_name: 'client' },
    { role_name: 'instructor' },
  ])
  await knex('users').insert([
    {
      username: 'bob',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      role_id: 1,
    },
    {
      username: 'sue',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      role_id: 3,
    },
  ])
  await knex('classes').insert([
    {
      name: 'testing',
      type: 'something',
      start_time: '3pm',
      intensity_level: 'hard',
      location: 'New York',
      number_registered: 12,
      max_class_size: 14
    }
  ])
}