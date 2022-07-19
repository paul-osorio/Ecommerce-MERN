const express = require("express");
const router = express.Router();
const { productCategories } = require("../controller/product-controller");

router.get("/category", productCategories);

module.exports = router;
