const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const isAuthenticated = require("../middleware/authentication");
const {
  getUserById,
  updateUserById,
} = require("../controller/user-controller");

//get user by id
router.get("/:id", isAuthenticated, getUserById);

//update user by id
router.put("/:id", isAuthenticated, updateUserById);

module.exports = router;
