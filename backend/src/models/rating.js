const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    shop_id: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const RatingModel = mongoose.model("Rating", RatingSchema);
module.exports = RatingModel;
