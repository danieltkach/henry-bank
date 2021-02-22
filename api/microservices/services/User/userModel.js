const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email:  String,
    password: String,
    role: String,    
  });

  module.exports = mongoose.model('User', userSchema)