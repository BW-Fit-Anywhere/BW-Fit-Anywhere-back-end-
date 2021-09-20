const db = require('../data/db-config');

async function getAll() {
    return await db('users');
}

async function getByFilter(filter){
    return await db('users')
    .where(filter)
}

async function getById(id){
    return await db('users')
    .where('user_id', id)
}

async function add (user){
    const [userObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
    return userObject
}

module.exports = {
    getAll,
    getByFilter,
    getById,
    add
}