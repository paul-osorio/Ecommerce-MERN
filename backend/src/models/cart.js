const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartScheme = new Schema(
  {
    item_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Cart", cartScheme);
module.exports = Card;
