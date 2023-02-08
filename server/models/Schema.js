const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: { unique: true },
  },
  religion: {
    type: String,
    required: true,
  },
});
Data = mongoose.model('Data', UserSchema);
module.exports = Data;
