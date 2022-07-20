const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const PRODUCT_DIR = "public/product_images/";
const shopStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PRODUCT_DIR);
  },
  filename: (req, file, cb) => {
    const fileName = `product_${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const productUpload = multer({ storage: shopStorage });

module.exports = {
  productImageMiddleware: productUpload.array("product_images", 8),
};
