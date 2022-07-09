const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const UserService = require("../services/user");
const passport = require("passport");
const saltRound = 10;
const isAuthenticated = require("../middleware/authentication");

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
      return res.status(401).json({
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

router.get("/session", isAuthenticated, (req, res) => {
  res.status(200).json({
    email: req.user.email,
  });
});

// router.post("/local/loginUser", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email });
//     if (user) {
//       const compareHashedPass = await bcrypt.compare(password, user.password);
//       if (compareHashedPass) {
//         res.json(user);
//       } else {
//         res.status(400).json({
//           message: "Invalid password",
//         });
//       }
//     } else {
//       res.status(400).json({
//         message: "User does not exist",
//       });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//get user by id
router.get("/getUser/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findById(_id);
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
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
