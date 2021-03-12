const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  newCardId: String,
  number: String,
  name: String,
  month: String,
  year: String,
  cvc: String
});

module.exports = mongoose.model('Card', cardSchema);
