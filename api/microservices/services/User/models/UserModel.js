const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, 'Ingresa un email valido'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Ingresa un email valido'
    ]
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: ['guest', 'client', 'admin'],
    default: 'guest'
  },
  idType: {
    type: String,
    enum: ['DNI', 'PAS', 'LIC']
  },
  idNumber: {
    type: Number,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  streetName: {
    type: String,
    trim: true
  },
  streetNumber: {
    type: Number,
    trim: true
  },
  zipCode: {
    type: Number,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  cellphone: {
    type: Number,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  birthdate: {
    type: String
  },
  codeSecurity: {
    type: String
  },
  codeSecurityExp: {
    type: Date
  },
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  // contacts: [UserSchema],
  contactsAlias: [{ email: String, alias: String }],
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account'
    }
  ],
  cards: [
    {
      _id: { type: String, required: true },
      newCardId: String,
      number: String,
      name: String,
      month: String,
      year: String,
      cvc: String
    }
  ]
  // cards: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Card'
  //   }
  // ]
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  if (this.password.length < 20) {
    this.password = hash;
  }

  this.codeSecurityExp = Date.now() + 600000;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

module.exports = mongoose.model('User', UserSchema);
