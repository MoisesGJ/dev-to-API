const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  },
  profilePic: {
    type: String,
    required: true,
    match:
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
    trim: true,
  },
  created: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updated: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
