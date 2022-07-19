const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  cat_id: {
    type: String,
    required: true,
  },
  cat_name: {
    type: String,
    required: true,
  },
  cat_slug: {
    type: String,
    required: true,
  },
  cat_parent: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Product_categories", categorySchema);

module.exports = Category;
