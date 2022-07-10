const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const UserService = require("../services/user");
const passport = require("passport");
const isAuthenticated = require("../middleware/authentication");

const saltRound = 10;

//create a new user
router.post("/local/registerUser", async (req, res) => {
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
        nameMiddle: body.nameMiddle,
        email: body.email,
        gender: body.gender,
        addresses: body.addresses,
        dateOfBirth: body.dateOfBirth,
        profilePicture: body.profilePicture,
        phoneNumber: body.phoneNumber,
        password: hashedPassword,
      });
      return res.status(201).json({
        message: "User created",
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
});

//login user
router.post("/local/loginUser", (req, res, next) => {
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
});

router.get("/session", (req, res) => {
  const cookie = req.isAuthenticated();

  res.json({
    isAuthenticated: cookie,
  });
});
router.get("/isAuth", async (req, res) => {
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
});

router.post("/logout", (req, res) => {
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
});

//get user by id
router.get("/getUser/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findById(_id);
    if (!user) {
      return res.json({
        message: "User not found",
      });
    }
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});

//update user by id
router.put("/updateUser/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
