const ShopModel = require("../models/shop");
const UserModel = require("../models/user");

const createShop = async (req, res) => {
  const bannerFilename = req.files.shop_banner[0].filename;
  const profileFilename = req.files.shop_profile[0].filename;

  try {
    await ShopModel.create({
      shop_name: req.body.shop_name,
      shop_banner: bannerFilename,
      shop_profile: profileFilename,
      shop_description: req.body.shop_description,
      user_id: req.user._id,
    });

    await UserModel.findOneAndUpdate({ _id: req.user._id }, { hasShop: true });

    return res.json({
      status: true,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: error.message,
    });
  }
};

const getShop = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ user_id: req.user._id });
    return res.json({
      status: true,
      shop_name: shop.shop_name,
      shop_banner: shop.shop_banner,
      shop_profile: shop.shop_profile,
      shop_description: shop.shop_description,
    });
  } catch (error) {
    return res.json({
      status: false,
      error: error,
    });
  }
};

const getShopById = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ user_id: req.params.id });
    return res.json({
      shop_name: shop.shop_name,
      shop_banner: shop.shop_banner,
      shop_profile: shop.shop_profile,
      shop_description: shop.shop_description,
    });
  } catch (error) {
    return res.json({
      status: false,
      error: error,
    });
  }
};

module.exports = {
  createShop,
  getShop,
  getShopById,
};
