const mongoose = require('mongoose');
const { Schema } = mongoose;

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
  email: {
    type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Ingresa un email valido'],
        validate: [validateEmail, 'Ingresa un email valido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingresa un email valido']
  },
  password: {
    type: String,
    // min: [8, 'Contraseña demasiado corta'],
    // max: [16, 'Contraseña demasiado larga'],
    required: [true, 'Contraseña requerida']
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client'
  },
  idType: {
    type: String,
    enum: ['dni'],
    required: true
  },
  idNumber: {
    type: Number,
    trim: true,
    // min: [8, 'Numero fuera de rango'],
    // max: [8, 'Numero fuera de rango'],
    required: true
  },
  name: {
    type: String,
    trim: true
  },
  lastName: {
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
  phone: {
    type: Number,
    trim: true
  },
  street: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  contacts : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ],
  accounts : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ]
module.exports = mongoose.model('User', userSchema)
