const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  currency: {
    type: String,
    enum: ['ARS', 'USD'],
    default: 'ARS'
  },
  cvu: {
    type: Number,
    unique: true
  },
  balance: {
    type: Number,
    default: 0
  },
});

//hook
accountSchema.pre('save', async function (next) {
  if(!this.cvu){
  let aux = Math.floor((Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000);
    this.cvu = aux
  }
  next();
})


module.exports = mongoose.model('Account', accountSchema);
