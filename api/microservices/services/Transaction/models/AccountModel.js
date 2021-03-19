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
  // cvuExternal: {
  //   type: String,
  //   unique: true,
  // },
  balance: {
    type: Number,
    default: 0
  },
});

//hook
accountSchema.pre('save', async function (next) {
  if(!this.cvu) {
    let min = 1000000000;
    let max = 9999999999999999999;
    let num = Math.floor(Math.random() * ((max + 1) - min) + min);
    let stringNum = "000000000000" + num;
    this.cvu = stringNum.substr(stringNum.length-22);
  }
  next();
})


module.exports = mongoose.model('Account', accountSchema);
