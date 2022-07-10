function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      message: "User is authenticated",
    });
  } else {
    res.json({
      isAuthenticated: false,
      message: "You are not logged in",
    });
  }
}
module.exports = checkAuthentication;
