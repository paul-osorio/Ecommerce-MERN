const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    shop_name: {
      type: String,
      required: true,
    },
    shop_banner: {
      type: String,
      required: true,
    },
    shop_profile: {
      type: String,
      required: true,
    },
    shop_description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ShopModel = mongoose.model("Shop", shopSchema);
module.exports = ShopModel;
