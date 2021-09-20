const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets")
const User = require('../users/user-model');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token) return next({
    status: 401, message: 'Token required'
  })

  jwt.verify(
    token,
    JWT_SECRET,
    (err, decoded) => {
      if(err) return next({
        status: 401, message: 'Token invalid'
      })
      req.decodedJwt = decoded
      next()
    }
  )
}

const checkIfUsernameExist = async (req,res,next) => {
    try{
        const { username } = req.body;
        const [user] = await User.getByFilter({username});
        if(user){
            res.status(401).json({ message : "username taken" })
        }
        else{
            res.username = username;
            next()
        }
    }
    catch(err){
    next(err)
    }
}

const checkIfUsernameNotExist = async (req,res,next) => {
    try{
        const { username } = req.body;
        const [user] = await User.getByFilter({username});
        if(!user){
            res.status(401).json({ message : "invalid credentials" })
        }
        else{
            res.username = username;
            next()
        }
    }
    catch(err){
    next(err)
    }
}

module.exports = {
  restricted,
  checkIfUsernameExist,
  checkIfUsernameNotExist,
}
