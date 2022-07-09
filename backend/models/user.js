const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nameFirst: {
    type: String,
    required: true,
  },
  nameLast: {
    type: String,
    required: true,
  },
  nameMiddle: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
