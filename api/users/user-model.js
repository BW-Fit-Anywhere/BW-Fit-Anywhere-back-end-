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

async function add ({username, password}){
    const [id] = await db('users').insert({ username, password});
    return getById(id)
}

module.exports = {
    getAll,
    getByFilter,
    getById,
    add
}