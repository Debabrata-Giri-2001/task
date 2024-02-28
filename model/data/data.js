const mongoose = require('mongoose');
const { Schema } = mongoose;

// //schema
const dataSchema = new Schema({
  
});


exports.data = mongoose.model('data',dataSchema);
