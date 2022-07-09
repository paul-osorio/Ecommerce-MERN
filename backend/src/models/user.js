const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  barangay: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});
const dateOfBirthObject = {
  month: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
};

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
  addresses: [AddressSchema],
  gender: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  dateOfBirth: dateOfBirthObject,
  role: {
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
