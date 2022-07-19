const express = require("express");
const router = express.Router();
const userRoute = require("./routes/user-route");
const userAuthRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");

router.use("/user", userRoute);
router.use("/user-auth", userAuthRoute);
router.use("/product/", productRoute);

module.exports = router;
