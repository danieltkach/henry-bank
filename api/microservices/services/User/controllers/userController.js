const User = require('../models/UserModel');
const nodeMailer = require('../util/nodeMailer');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const createUser = async (req, res, next) => {
  const { name, email, lastName, codeSecurity } = req.user;
  const body = { _id: req.user._id, email: req.user.email };
  // const token = jwt.sign({ user: body }, 'top_secret');

  nodeMailer
    .sendEmail({ name, lastName, email, codeSecurity })
    .then((response) => {
      return axios.post(
        `http://localhost:4002/transaction/account/${req.user._id}`
      );
    })
    .then((resp) => {
      res
        .status(200)
        .json({ message: 'Registro inicial completado', user: req.user });
    })
    .catch((err) =>
      res.status(400).json({ message: 'Error al enviar el email' })
    );
};

const loginUser = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('new Error');
        return next(error);
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = { _id: user._id, email: user.email };

        const token = jwt.sign({ user: body }, 'top_secret');
        return res.status(202).json({ user, token });
      });
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
};

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

const modifyUser = async (req, res, next) => {
  const user_id = req.params.id;
  //if(calcularEdad(req.body.birthdate) >=16){
  User.findByIdAndUpdate(
    user_id,
    {
      role: 'client',
      idType: req.body.idType,
      idNumber: req.body.idNumber,
      name: req.body.name,
      lastName: req.body.lastName,
      streetNumber: req.body.streetNumber,
      zipCode: req.body.zipCode,
      country: req.body.country,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      birthdate: req.body.birthdate
    },
    (err, userUpdated) => {
      if (err)
        res
          .status(400)
          .send({ message: 'Error al terminar de registrar al usuario' });
      res.status(200).send({ msg: 'Registro completado' });
    }
  );
  //}
  /* else{
    res.status(400).send("Menor de edad!!")
  } */
};

const getUser = (req, res, next) => {
  const user = req.params.id;

  User.findById(user, (error, data) => {
    if (error) res.status(400).send('Error al cargar');
    res.status(200).send(data);
  });
};

const getUsers = (req, res, next) => {
  User.find((error, data) => {
    if (error) res.status(400).send('Error al cargar');
    res.status(200).send(data);
  });
};

const verifyCodeSecurity = (req, res) => {
  const { email, codeSecurity } = req.body;

  User.findOne({ email })
    .then((responseUser) => {
      if (
        responseUser.codeSecurity === codeSecurity &&
        responseUser.codeSecurityExp > Date.now()
      ) {
        res
          .status(200)
          .json({ message: 'Codigo verificado', userId: responseUser._id });
      } else res.status(400).json({ message: 'Error de verificacion' });
    })
    .catch((err) => res.status(400).json({ message: 'Email inexistente' }));
};

const addContact = (req, res) => {
  const userId = req.params.id;
  const contactEmail = req.body.contactEmail;
  let foundUser;

  User.findOne({ _id: userId })
    .then((user) => {
      foundUser = user;
      return User.findOne({ email: contactEmail });
    })
    .then((contact) => {
      if (foundUser._id.toString() === contact._id.toString()) {
        return res
          .status(400)
          .json({ message: 'No te puedes agregar a tí mismo.' });
      }
      if (foundUser.contacts.includes(contact._id)) {
        return res
          .status(400)
          .json({ message: 'Contacto ya existe.', contact });
      }

      console.log('>>> contact: ', contact);
      foundUser.contacts.push(contact);
      foundUser.save();
      return res.status(201).json({
        message: 'Contacto agregado.',
        contacts: foundUser.contacts
      });
    })
    .catch((error) => {
      res.status(400).json({ message: 'Error.', error });
    });
};

module.exports = {
  createUser,
  loginUser,
  modifyUser,
  getUser,
  getUsers,
  verifyCodeSecurity,
  addContact
};
