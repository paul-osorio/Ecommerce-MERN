const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerce";

const connectDB = async () => {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
