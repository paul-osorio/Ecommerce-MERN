const CategoryModel = require("../models/categories");

const productCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    return res.json({
      categories: categories,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

module.exports = {
  productCategories,
};
