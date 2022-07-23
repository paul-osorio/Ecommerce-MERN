const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");
const {
  createShop,
  getShop,
  getShopById,
} = require("../controller/shop-controller");
const { shopUploadMiddleware } = require("../middleware/shopUpload");

router.post("", isAuthenticated, shopUploadMiddleware, createShop);

router.get("", isAuthenticated, getShop);
router.get("/:id", isAuthenticated, getShopById);

module.exports = router;
