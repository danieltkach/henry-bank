const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({			
		userId: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "User"
		},
         otherUserId: {
			type: mongoose.Schema.Types.ObjectId,
            ref: "User"
		},
		alias: {
			type: String,
			required: [true, "Alias is required"]
		},		
  });

  module.exports = mongoose.model('Contact', contactSchema);