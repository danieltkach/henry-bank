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
    type: String,
  },
  balance: {
    type: String,
    default: ''
  },
});

//hook

module.exports = mongoose.model('Account', accountSchema);
