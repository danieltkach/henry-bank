const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  currency: {
    type: String,
    default: '' 
  },
  CVU: {
    type: Number,
    unique: true
  },
  balance: {
    type: String,
    default: ''
  },
});

//hook
accountSchema.pre('save', async function (next) {
  let max = 9999999999
  let min = 1000000000
  let aux = Math.floor((Math.random() * (max - min + 1)) + min);
  this.CVU = aux
  next();
})


module.exports = mongoose.model('Account', accountSchema);
