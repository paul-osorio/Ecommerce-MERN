const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");

const {
  addToCart,
  getOneCartItem,
  getMyCart,
} = require("../controller/cart-controller");

router.get("", isAuthenticated, addToCart);
router.get("/details", getOneCartItem);
router.get("/items", isAuthenticated, getMyCart);

module.exports = router;
