const express = require("express");
const router = express.Router();
const userRoute = require("./routes/user-route");
const userAuthRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const shopRoute = require("./routes/shop-route");

router.use("/user", userRoute);
router.use("/user-auth", userAuthRoute);
router.use("/product/", productRoute);
router.use("/shop", shopRoute);

module.exports = router;
