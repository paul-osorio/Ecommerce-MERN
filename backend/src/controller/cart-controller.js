const CartModel = require("../models/cart");

const addToCart = async (req, res) => {
  const item_id = req.query.item_id;
  const quantity = parseInt(req.query.quantity);

  try {
    const cart = await CartModel.findOne({
      user_id: req.user._id,
      item_id: item_id,
    });

    if (cart) {
      await CartModel.findOneAndUpdate(
        {
          user_id: req.user._id,
          item_id: item_id,
        },
        {
          quantity: cart.quantity + quantity,
        }
      );
    } else {
      await CartModel.create({
        item_id,
        user_id: req.user._id,
        quantity,
      });
    }
    return res.json({
      status: true,
      message: "Item added to cart",
    });
  } catch (err) {
    console.log(err.message);

    return res.json({
      status: false,
      message: err.message,
    });
  }
};
const getOneCartItem = async (req, res) => {
  const item_id = req.query.item_id;

  try {
    const cart = await CartModel.findOne({
      user_id: req.user._id,
      item_id: item_id,
    });
    return res.json({
      status: true,
      data: cart,
    });
  } catch (err) {
    return res.json({
      status: false,
      message: err.message,
    });
  }
};

module.exports = {
  addToCart,
  getOneCartItem
};
