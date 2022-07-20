const express = require("express");
const router = express.Router();
const {
  productCategories,
  createProduct,
} = require("../controller/product-controller");
const { productImageMiddleware } = require("../middleware/productImageUpload");
const isAuthenticated = require("../middleware/authentication");

router.get("/category", productCategories);

router.post("", isAuthenticated, productImageMiddleware, createProduct);

module.exports = router;
