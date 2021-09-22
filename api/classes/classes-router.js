const router = require('express').Router()
const md = require('./classes-middleware')
const Classes = require('./classes-model')
router.get('/', async (req, res, next) => {
    try {
      const classes = await Classes.getAll()
      res.json(classes)
    } catch(err) {
      next(err)
    }
  })
  router.get('/:id', md.checkAccountId, async (req, res, next) => {
    res.json(req.classes)
  })
  router.post(
    '/', 
    md.checkAccountPayload, 
    md.checkAccountNameUnique, 
    async (req, res, next) => {
    try {
      const newClasses = await Classes.create({
        name: req.body.name.trim(),
        type: req.body.type,
        start_time: req.body.start_time,
        intensity_level: req.body.intensity_level,
        location: req.body.location,
        number_registered: req.body.number_registeted,
        max_class_size: req.body.max_class_size,
        
        
      })
      res.status(201).json(newClasses)
    } catch(err) {
      next(err)
    }
  })
  router.put(
    '/:id', 
    md.checkAccountId, 
    md.checkAccountPayload,
    async (req, res, next) => {
    try {
      const updated = await Classes.updateById(req.params.id, req.body)
      res.json(updated)
    } catch(err) {
      next(err)
    }
  });
  router.delete('/:id', md.checkAccountId, async (req, res, next) => {
    try {
      await Classes.deleteById(req.params.id)
      res.json(req.classes)
    } catch(err) {
      next(err)
    }
  })
  router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
    })
  })
  
  module.exports = router;
  