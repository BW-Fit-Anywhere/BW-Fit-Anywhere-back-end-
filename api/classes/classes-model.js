const db = require('../data/db-config')

const getAll = () => {
  return db('classes');
}

const getById = id => {
  return db('classes').where('class_id', id).first()
}

const create = async classes => {
  const [id] = await db('classes').insert(classes)
  return getById(id)
}

const updateById = async (id, classes) => {
  await db('classes').where('class_id', id).update(classes)
  return getById(id)
}

const deleteById = id => {
  return db('classes').where('class_id', id).del()
}
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}