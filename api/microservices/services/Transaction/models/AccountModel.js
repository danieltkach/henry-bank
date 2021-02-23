const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  currency: {
    type: String,
    required: true,
  },
  CVU: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Account', accountSchema);
