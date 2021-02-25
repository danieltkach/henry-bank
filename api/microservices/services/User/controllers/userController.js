const User = require('../models/UserModel')
const nodeMailer = require('../util/nodeMailer')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const createUser = async (req, res, next) => {
  const { name, email, lastName } = req.user;
  const body = { _id: req.user._id, email: req.user.email }
  const token = jwt.sign({ user: body }, 'top_secret');

  nodeMailer.sendEmail({name, lastName, email, token})
  .then(response => {
    res.status(200).json({ message: "Registro inicial completado", user: req.user });
  })
  .catch(err => res.status(400).json({ message: "Error al enviar el email" }))
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


function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  return edad;
}


const modifyUser = async(req,res,next) => {
  const user_id = req.params.id
  if(calcularEdad(req.body.birthdate) >=16){
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
      birthdate: req.body.birthdate
    }, (err, userUpdated) => {
      if(err) res.status(400).send({message: 'Error al terminar de registrar al usuario'})
      res.status(200).send({msg : 'Registro completado'})
    })
  }
  else{
    res.status(400).send("Menor de edad!!")
  }
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

const verifyToken = (req, res) => {
  // const token = req.headers.authorization.split(" ")[1];
  const token = req.body.token;
  jwt.verify(token, "top_secret", (err, decode) => {
      if(err) return res.status(409).json({ message: 'Autorizacion no valida' });
      return res.status(200).json({ user: decode.user, message: 'Correo electrónico autorizado' });
  });
}

module.exports= {
    createUser,
    loginUser,
    modifyUser,
    getUser,
    getUsers,
    verifyToken
}
