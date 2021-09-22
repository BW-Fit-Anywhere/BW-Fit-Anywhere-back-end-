const db = require('../data/db-config');

async function getAll() {
    return await db('users');
}

async function getByFilter(filter) {
    return await db('users')
        .where(filter)
}

async function getById(id) {
    return await db('users')
        .where('user_id', id)
}

async function add({username, password, role_name}) {
    let created_user
    await db.transaction(async trx => {
        let role_id_to_use
        const [role] = await trx('roles').where('role_name', role_name)
        if (role) {
            role_id_to_use = role.role_id
        }
        else {
            const [role_id] = await trx('roles').insert({ role_name: role_name } , ['role_name'])
            role_id_to_use = role_id
        }
        const [user] = await trx('users').insert({ username, password, role_id: role_id_to_use }, ['username', 'password', 'role_id'])
        created_user = user
    })

    return created_user
}

module.exports = {
    getAll,
    getByFilter,
    getById,
    add
}