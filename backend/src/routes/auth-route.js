const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/authentication");
const {
  userRegister,
  userLogin,
  userAuth,
  userLogout,
  userCheckEmail,
  resendVerificationLink,
} = require("../controller/auth-controller");

router.post("/register/local", userRegister);

router.post("/login/local", userLogin);

//check authentication session
router.get("", userAuth);

//logout user
router.post("/logout", userLogout);

//check email if it exists
router.post("/check-email", userCheckEmail);

//resend verification link
router.post("/resend-verification-link", resendVerificationLink);

module.exports = router;
