const express = require("express");
const router = express.Router();
const {
  productCategories,
  createProduct,
  getAllProducts,
  getOneProduct,
} = require("../controller/product-controller");
const { productImageMiddleware } = require("../middleware/productImageUpload");
const isAuthenticated = require("../middleware/authentication");

router.get("/category", productCategories);

router.post("", isAuthenticated, productImageMiddleware, createProduct);
router.get("", isAuthenticated, getAllProducts);
router.get("/:id", isAuthenticated, getOneProduct);

module.exports = router;
