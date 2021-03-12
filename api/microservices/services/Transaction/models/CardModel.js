const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  _id: { type: String, required: true },
  stripeCardId: String,
  number: String,
  name: String,
  exp_month: String,
  exp_year: String,
  cvc: String
});

module.exports = mongoose.model('Card', cardSchema);
