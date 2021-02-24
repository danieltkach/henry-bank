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


const modifyUser = async(req,res,next) => {
  const user_id = req.params.id

  User.findByIdAndUpdate(user_id ,{
    role : 'client',
    idType : req.body.idType,
    idNumber: req.body.idNumber,
    name: req.body.name,
    lastName: req.body.lastName,
    streetNumber : req.body.streetNumber,
    zipCode : req.body.zipCode,
    country : req.body.country,
    phone : req.body.phone,
    street : req.body.street,
    city: req.body.city,
  }, (err, userUpdated) => {
    if(err) res.status(400).send({message: 'Error al terminar de registrar al usuario'})
    res.status(200).send({user : userUpdated, msg : 'Registro completado'})
  })
}

const getUser = (req, res, next) => {
    const user = req.params.id

    User.findById(user, (error, data) =>{
      if(error) res.status(400).send("Error al cargar")
      res.status(200).send(data)
    })
}

const getUsers = (req, res, next) => {

  User.find((error, data) =>{
    if(error) res.status(400).send("Error al cargar")
    res.status(200).send(data)
  })
}

module.exports= {
    createUser,
    loginUser,
    modifyUser,
    getUser,
    getUsers
}
