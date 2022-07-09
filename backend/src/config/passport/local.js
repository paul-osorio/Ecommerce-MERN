const passport = require("passport");
const User = require("../../models/user");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const local = new LocalStrategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  User.findOne({ email: email }, async (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return done(null, false, { message: "Incorrect password" });
    }

    return done(null, user);
  });
});

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, "email", (err, user) => {
    done(null, user);
  });
});

passport.use(local);

module.exports = passport;