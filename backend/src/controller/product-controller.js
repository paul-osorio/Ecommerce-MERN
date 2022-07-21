const CategoryModel = require("../models/categories");
const ProductModel = require("../models/product");

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

const createProduct = async (req, res) => {
  const dataFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    dataFiles.push(req.files[i].filename);
  }

  const category = JSON.parse(req.body.category);
  const categoryArray = [];
  for (let i = 0; i < category.length; i++) {
    categoryArray.push(category[i].label);
  }

  const data = {
    user_id: req.user._id,
    productName: req.body.productName,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
    category: categoryArray,
    shipping: JSON.parse(req.body.shipping),
    images: dataFiles,
  };

  try {
    const product = new ProductModel(data);
    product.save((err, product) => {
      if (err) {
        return res.json({
          error: err,
        });
      }
      return res.json({
        product: product,
      });
    });
  } catch (error) {
    return res.json({
      status: "error",
      error: error,
    });
  }
};

const getAllProducts = async (req, res) => {
  //find all products based on user_id
  try {
    const products = await ProductModel.find({ user_id: req.user._id });
    return res.json({
      products: products,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

const getOneProduct = async (req, res) => {
  //find one product based on product_id
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    return res.json({
      product: product,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

module.exports = {
  productCategories,
  createProduct,
  getAllProducts,
  getOneProduct,
};
