const express = require("express");
const router = express.Router();
const userRoute = require("./routes/user-route");
const userAuthRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const shopRoute = require("./routes/shop-route");
const cartRoute = require("./routes/cart-route");

router.use("/user", userRoute);
router.use("/user-auth", userAuthRoute);
router.use("/product", productRoute);
router.use("/shop", shopRoute);
router.use("/cart", cartRoute);

module.exports = router;
