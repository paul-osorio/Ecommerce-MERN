const ShopModel = require("../models/shop");
const UserModel = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const createShop = async (req, res) => {
  const newPathBanner = __dirname + "/../public/shop/banner";
  const newPathProfile = __dirname + "/../public/shop/profile";

  try {
    const shopProfile = req.files.shop_profile;
    const shopBanner = req.files.shop_banner;
    const profileExtenstion = path.extname(shopProfile.name);
    const bannerExtenstion = path.extname(shopBanner.name);

    const shopProfileName = "profile_" + uuidv4() + profileExtenstion;
    const shopBannerName = "banner_" + uuidv4() + bannerExtenstion;

    const data = {
      user_id: req.user._id,
      shop_name: req.body.shop_name,
      shop_banner: shopBannerName,
      shop_profile: shopProfileName,
      shop_description: req.body.shop_description,
    };

    shopProfile.mv(newPathProfile + "/" + shopProfileName, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
    });

    shopBanner.mv(newPathBanner + "/" + shopBannerName, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
    });

    const shop = await ShopModel.create(data);
    await UserModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        hasShop: true,
      }
    );

    return res.json({
      status: true,
      shop: shop,
    });
  } catch (error) {
    return res.json({
      status: false,
      error: error,
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

module.exports = {
  createShop,
  getShop,
};
