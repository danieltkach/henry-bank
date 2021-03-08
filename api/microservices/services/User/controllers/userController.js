const User = require('../models/UserModel');
const nodeMailer = require('../util/nodeMailer');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const crypto = require('crypto');


const createUser = async (req, res, next) => {
  const { email, codeSecurity } = req.user;
  const body = { _id: req.user._id, email: req.user.email };
  const token = jwt.sign({ user: body }, 'top_secret');

  User.findOne({ email: email })
  // .then(userResponse => {
  //   return axios.post(`http://localhost:4002/transaction/account/init/${userResponse._id}`)
  // })
  .then((resp) => {
    // user.accounts.push(resp.data.account);
    // user.save();
    res.status(201).json({user: { email: resp.email, token}, message: 'Registro inicial completado, cuenta asociada' });
  })
  .catch((err) => {
    res.status(400).json({ message: 'Usuario inexistente' });
  })
};

const sendEmailVerify = (req, res) => {
  const { email } = req.body;

  User.findOne({ email: email })
  .then(userResponse => {
    userResponse.codeSecurity = crypto.randomBytes(3).toString('hex').toUpperCase();
    userResponse.save();
    return nodeMailer.sendEmail({
      email: userResponse.email,
      codeSecurity: userResponse.codeSecurity
    })
  })
  .then(emailResponse => {
    res.status(200).json({ message: 'Email enviado', info: emailResponse })
  })
  .catch(err => {
    res.status(400).json({ message: 'Usuario inexistente' });
  })
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
        let filterUser =  { ...user._doc };
        delete filterUser.password;
        delete filterUser.codeSecurityExp;
        delete filterUser.__v;
        return res.status(202).json({ user: filterUser, token, message: info });
      });

    } catch (e) {
      return res.status(202).json({ message: info });
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

const modifyUser = (req, res, next) => {
  const userId = req.params.id;

  const {
    idType,
    idNumber,
    name,
    lastName,
    birthdate,
    cellphone,
    streetName,
    streetNumber,
    city,
    zipCode,
    country
  } = req.body;
  console.log('DEBUG')
  User.findById({_id: userId}, (error, user) => {
    console.log(user)
    user.role = 'client',
    user.idType = idType,
    user.idNumber = idNumber,
    user.name = name,
    user.lastName = lastName,
    user.birthdate = birthdate,
    user.cellphone = cellphone,
    user.streetName = streetName,
    user.streetNumber = streetNumber,
    user.city = city,
    user.country = country,
    user.zipCode = zipCode


    user.save();
    res.status(200).json({ message: 'Usuario actualizado.', userId });
  })
  .catch((error) =>
    res.status(400).json({ message: 'Error al actualizar usuario.' })
  );
};

const getUser = (req, res, next) => {
  const user = req.params.id;

  User.findById(user, (error, data) => {
    if (error) res.status(400).send('Error al cargar');
    res.status(200).send(data);
  });
};

const getUsers = (req, res) => {
  const order = req.body.order || 1;

  User.find({})
    .sort({ name: order })
    .populate('contacts')
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((e) =>
      res.status(404).json({
        message: 'No se pudieron cargar los usuarios.',
        error: e.message
      })
    );
};

const verifyCodeSecurity = (req, res) => {
  const { email, codeSecurity } = req.body;

  User.findOne({ email })
  .then((responseUser) => {
    if (
      responseUser.codeSecurity === codeSecurity &&
      responseUser.codeSecurityExp > Date.now()
    ){
      responseUser.codeSecurity = 'active';
      responseUser.save();
      res.status(200).json({ status: 200, message: 'Codigo verificado', userId: responseUser._id });
    } else res.status(400).json({ status: 400, message: 'Codigo incorrecto' });
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
      // Validations
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

      // Adding contact to user
      foundUser.contacts.push(contact);
      foundUser.contactsAlias.push({
        email: contact.email,
        alias: contact.name
      });
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

const deleteContact = (req, res) => {
  const userId = req.params.id;
  const contactEmail = req.body.contactEmail;

  User.findOne({ _id: userId })
    .populate('contacts',"contactsAlias")
    .then((user) => {
      user.contacts     = user.contacts.filter((c) => c.email == contactEmail);
      user.contactsAlias = user.contactsAlias.filter((c) => c.email !== contactEmail);
      user.save();
      res.status(200).json(user);
    })
    .catch((e) => res.send(404).json(e));
};

const modifyAlias = (req, res) => {
  const userId = req.params.id;
  const { contactEmail, contactAlias } = req.body;
  User.findOne({ _id: userId })
    .then((user) => {
      contact = user.contactsAlias.find((c) => c.email === contactEmail);
      contact.alias = contactAlias;
      user.save();
      return res.status(200).json({ message: 'Alias changed.', contact });
    })
    .catch((error) =>
      res.status(400).json({ message: 'No se pudo cambiar el alias.' })
    );
};

module.exports = {
  createUser,
  loginUser,
  modifyUser,
  getUser,
  getUsers,
  verifyCodeSecurity,
  addContact,
  deleteContact,
  modifyAlias,
  sendEmailVerify
};
