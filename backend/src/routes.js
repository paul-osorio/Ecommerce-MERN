const express = require("express");
const router = express.Router();
const userRoute = require("./routes/user-route");
const userAuthRoute = require("./routes/auth-route");

router.use("/user", userRoute);
router.use("/user-auth", userAuthRoute);

module.exports = router;
