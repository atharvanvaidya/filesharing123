var mongoose = require("mongoose");

var FileSchema = new mongoose.Schema({
documentname: String,  
  filename: String,
  owner: String,
  location: String,
  description: String,
  copies: Number,
  group: String
})

FileSchema.methods.decrement = function(cb){
	this.copies -= 1;
	this.save(cb);
}

module.exports = mongoose.model('File', FileSchema);
