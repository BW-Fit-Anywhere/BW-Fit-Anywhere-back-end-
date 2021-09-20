const express = require('express');
const router = express.Router();
const Users = require('./user-model');

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.getAll();
        res.status(200).json(users);
    }
    catch (err) {
        next(err)
    }
})

router.get('/:user_id', async (req, res, next) => {
    try {
        res.status(200).json({ message: '[GET] Get a user with an id' })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;