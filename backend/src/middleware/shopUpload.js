const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const SHOP_DIR = "public/shop/";
const shopStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, SHOP_DIR);
  },
  filename: (req, file, cb) => {
    const fileName = `${file.fieldname}_${uuidv4()}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const shopUpload = multer({ storage: shopStorage });

module.exports = {
  shopUploadMiddleware: shopUpload.fields([
    { name: "shop_banner", maxCount: 1 },
    { name: "shop_profile", maxCount: 1 },
  ]),
};
