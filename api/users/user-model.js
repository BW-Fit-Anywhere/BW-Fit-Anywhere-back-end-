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

module.exports = {
    getAll,
    getByFilter,
    getById
}