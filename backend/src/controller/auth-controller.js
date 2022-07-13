const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const UserService = require("../services/user");
const saltRound = 10;
const sendEmail = require("../helpers/sendemail");
const passport = require("passport");

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

const userLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        message: info.message,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        message: "User logged in",
      });
    });
  })(req, res, next);
};

const userAuth = async (req, res) => {
  if (req.user) {
    return res.json({
      isAuthenticated: true,
      user: req.user,
    });
  } else {
    return res.json({
      isAuthenticated: false,
    });
  }
};

const userLogout = (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
    return res.status(200).json({
      message: "User logged out",
    });
  });
};

const userCheckEmail = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.json({
        status: false,
      });
    } else {
      return res.json({
        status: true,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const resendVerificationLink = async (req, res) => {
  const email = req.body.email;

  try {
    await sendEmail(email);
    return res.json({
      message: "Verification link sent",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userAuth,
  userLogout,
  userCheckEmail,
  resendVerificationLink,
};
