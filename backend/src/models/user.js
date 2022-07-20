const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: Object,
    required: true,
  },
  region: {
    type: Object,
    required: true,
  },
  barangay: {
    type: Object,
    required: true,
  },
  province: {
    type: Object,
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

const UserSchema = new mongoose.Schema(
  {
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
    hasShop: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
