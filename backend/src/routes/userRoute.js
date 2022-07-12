const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const passport = require("passport");
const isAuthenticated = require("../middleware/authentication");
const userRegister = require("../helpers/userRegister");

//create a new user
router.post("/local/registerUser", userRegister);

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

router.get("/isAuth", isAuthenticated, async (req, res) => {
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
router.get("/getUser/:id", isAuthenticated, async (req, res) => {
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
router.put("/updateUser/:id", isAuthenticated, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/checkEmail", async (req, res) => {
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
});

module.exports = router;
