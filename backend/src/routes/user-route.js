const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const isAuthenticated = require("../middleware/authentication");
const {
  getUserById,
  updateUserById,
  getUserDetails,
} = require("../controller/user-controller");

//get user by sessionID
router.get("", isAuthenticated, getUserDetails);

//update user by id
router.put("/:id", isAuthenticated, updateUserById);

module.exports = router;
