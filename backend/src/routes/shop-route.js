const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");
const { createShop, getShop } = require("../controller/shop-controller");
const { shopUploadMiddleware } = require("../middleware/shopUpload");

router.post("", isAuthenticated, shopUploadMiddleware, createShop);

router.get("", isAuthenticated, getShop);

module.exports = router;
