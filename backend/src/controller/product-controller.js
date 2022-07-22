const CategoryModel = require("../models/categories");
const ProductModel = require("../models/product");
const fs = require("fs");

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

const deleteProduct = async (req, res) => {
  //delete one product based on product_id
  try {
    const product = await ProductModel.findOneAndDelete({ _id: req.params.id });
    const images = product.images;
    for (let i = 0; i < images.length; i++) {
      fs.unlinkSync(`./public/product_images/${images[i]}`);
    }

    return res.json({
      product: images,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

const productPagination = async (req, res) => {
  //pagination for products
  const itemsPerPage = req.params.itemsPerPage;
  const pageNum = parseInt(req.params.pageNum);

  try {
    const products = await ProductModel.find({})
      .skip((pageNum - 1) * itemsPerPage)
      .limit(itemsPerPage);
    return res.json({
      results: products,
      info: {
        results: itemsPerPage,
        page: pageNum,
      },
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

const getAllProductPage = async (req, res) => {
  //pagination for products
  const itemsPerPage = req.params.itemsPerPage;
  const pageNum = parseInt(req.params.pageNum);

  try {
    const products = await ProductModel.find({ user_id: req.user._id })
      .skip((pageNum - 1) * itemsPerPage)
      .limit(itemsPerPage);
    return res.json({
      results: products,
      info: {
        results: itemsPerPage,
        page: pageNum,
        totalPages: Math.ceil(
          (await ProductModel.countDocuments({ user_id: req.user._id })) /
            itemsPerPage
        ),
        totalResults: await ProductModel.countDocuments({
          user_id: req.user._id,
        }),
      },
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
  productPagination,
  deleteProduct,
  getAllProductPage,
};
