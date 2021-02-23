const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
		accountId:  {
			type: Number,
            required: true
	    },
		number: {
			type: Number,
			required: true
		},
        expDate:{
            type:Date,
            required: true,
        },
        securityCode:{
            type: Number,
            required: true
        }

  });

  module.exports = mongoose.model('Card', cardSchema);