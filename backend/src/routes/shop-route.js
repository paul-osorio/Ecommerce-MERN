const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");
const { createShop, getShop } = require("../controller/shop-controller");

router.post("", isAuthenticated, createShop);
router.get("", isAuthenticated, getShop);

module.exports = router;
