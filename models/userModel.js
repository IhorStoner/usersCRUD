const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 60,
  },
  surname: {
    type: String,
    required: true,
    maxlength: 60,
  },
  dateOfBirthday: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;

