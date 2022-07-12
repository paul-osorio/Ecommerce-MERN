const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const UserService = require("../services/user");
const nodemailer = require("nodemailer");
const saltRound = 10;
const sendEmail = require("./sendemail");

const userRegister = async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.password, saltRound);

  //check if user already exists
  const user = await UserModel.findOne({ email: body.email });
  if (user) {
    return res.status(400).json({
      message: "Email already taken",
    });
  } else {
    try {
      await UserService.addLocalUser({
        nameFirst: body.nameFirst,
        nameLast: body.nameLast,
        email: body.email,
        gender: body.gender,
        addresses: body.addresses,
        dateOfBirth: body.dateOfBirth,
        profilePicture: body.profilePicture,
        phoneNumber: body.phoneNumber,
        password: hashedPassword,
      });
      sendEmail(body.email);

      return res.status(201).json({
        message: "User created",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

module.exports = userRegister;
