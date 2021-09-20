const express = require('express'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const router = express.Router();

router.post("/register",  (req, res, next) => {
    res.status(200).json({ message: '[POST] Register with credentials' })
})

router.post("/login",  (req, res, next) => {
    res.status(200).json({ message: '[POST] Login with credentials' })
})


module.exports = router;