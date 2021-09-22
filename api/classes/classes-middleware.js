const Classes = require('./classes-model')
const db = require('../data/db-config')

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 }
  const { name, type, start_time, intensity_level, location, number_registered, max_class_size } = req.body
  if (name === undefined || start_time === undefined || intensity_level === undefined) {
    error.message = 'name start_time intensity_level are required'
    next(error)
  }
  if (type === undefined || location === undefined || number_registered === undefined || max_class_size === undefined) {
    error.message = 'type location number_registred and max_class_size are required'
    next(error)
  }
  else if (typeof name !== 'string') {
    error.message = 'name of classes must be a string'
    next(error)
  }
  else if (name.trim().length < 3 || name.trim().length > 100) {
    error.message = 'name of classes must be between 3 and 100'
    next(error)
  }
  else if (typeof max_class_size !== 'number' || isNaN(max_class_size)) {
    error.message = 'message: max_class_size of classes must be a number'
    next(error)
  }
  else if (typeof number_registered !== 'number' || isNaN(number_registered)) {
    error.message = 'message: number_registered of classes must be a number'
    next(error)
  }
  else if (typeof type !== 'string') {
    error.message = 'type of classes must be a string'
    next(error)
  }
  else if (typeof start_time !== 'string') {
    error.message = 'start_time of classes must be a string'
    next(error)
  }
  else if (typeof intensity_level !== 'string') {
    error.message = 'intensity_level of classes must be a string'
    next(error)
  }
  else if (typeof location !== 'string') {
    error.message = 'location of classes must be a string'
    next(error)
  }
  if (error.message) {
    next(error)
  } else {
    next()
  }
}

  exports.checkAccountNameUnique = async (req, res, next) => {
    try {
      const existing = await db('classes')
        .where('name', req.body.name.trim())
        .first()

      if (existing) {
        next({ status: 400, message: 'that name is taken' })
      } else {
        next()
      }
    } catch (err) {
      next(err)
    }
  }

  exports.checkAccountId = async (req, res, next) => {

    try {
      const classes = await Classes.getById(req.params.id)
      if (!classes) {
        next({ status: 404, message: 'classes not found' })
      } else {
        req.classes = classes
        next()
      }
    } catch (err) {
      next(err)
    }
  }

