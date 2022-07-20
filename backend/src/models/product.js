const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
});

const productSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    shipping: ShippingSchema,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
