const User = require('../models/UserModel')

const passport = require('passport')
const jwt = require('jsonwebtoken')

const createUser = async (req, res, next) => {
    res.status(201).json({
      message: 'Signup successful',
      user: req.user,
  })
}

const loginUser = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        console.log(err)
        const error = new Error('new Error')
        return next(error)
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err)
        const body = { _id: user._id, email: user.email }

        const token = jwt.sign({ user: body }, 'top_secret')
        return res.json({ token })
      })
    }
    catch(e) {
      return next(e)
    }
  })(req, res, next)
}

const getUser = (req, res, next) => {
  res.json({
    message: 'Get user',
    user: req.user,
    token: req.query.secret_token,
  })
}

module.exports= {
    createUser,
    loginUser
}
