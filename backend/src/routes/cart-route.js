const express = require("express");
const router = express.Router();
const { addToCart, getOneCartItem } = require("../controller/cart-controller");

router.get("", addToCart);
router.get("/details", getOneCartItem);

module.exports = router;
