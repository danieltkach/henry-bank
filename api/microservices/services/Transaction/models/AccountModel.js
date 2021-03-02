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
  let max = 9999999999
  let min = 1000000000
  let aux = Math.floor((Math.random() * (max - min + 1)) + min);
    this.cvu = aux
  }
  next();
})


module.exports = mongoose.model('Account', accountSchema);
