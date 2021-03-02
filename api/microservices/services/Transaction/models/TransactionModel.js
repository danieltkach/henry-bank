const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
	transactionType:  {
		type: String,
		enum : ['transfer','recharge'],
		default: 'transfer'
	 },
	currency: {
		type: String,
		required: true
	},
	// REVIEW *************************
	amount: {
		type:	String,
		required: true
	},
  idSenderAccount: {
		type: String,
		required: false
	},
	idReceiverAccount: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Transaction', transactionSchema);
