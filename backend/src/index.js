const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/mongodb.config");
require("./config/passport/local");

connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser("secret"));

app.use(passport.initialize());
app.use(passport.session());

// Routes
const userRouter = require("./routes/userRoute");

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
