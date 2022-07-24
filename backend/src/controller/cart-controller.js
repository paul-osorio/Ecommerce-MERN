const CartModel = require("../models/cart");
const ProductModel = require("../models/product");

const addToCart = async (req, res) => {
  const item_id = req.query.item_id;
  const quantity = parseInt(req.query.quantity);

  try {
    //get the item stock from the database
    const product = await ProductModel.findOne({
      _id: item_id,
    });
    //get cart item from the database
    const cart = await CartModel.findOne({
      user_id: req.user._id,
      item_id: item_id,
    });

    if (cart) {
      if (cart.quantity + quantity > product.stock) {
        return res.status(400).json({
          message: "Not enough stock",
        });
      } else {
        //update the cart item quantity findoneandupdate
        await CartModel.findOneAndUpdate(
          { _id: cart._id },
          {
            quantity: cart.quantity + quantity,
            updated_at: Date.now(),
          }
        );
        return res.status(200).json({
          message: "Cart updated",
        });
      }
    } else {
      //add new item to cart
      if (quantity > product.stock) {
        return res.status(400).json({
          message: "Not enough stock",
        });
      } else {
        //create  cart item
        await CartModel.create({
          user_id: req.user._id,
          item_id: item_id,
          quantity: quantity,
        });
        return res.status(200).json({
          message: "New item added to cart",
        });
      }
    }
  } catch (err) {
    return res.status(400).json({
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

const getMyCart = async (req, res) => {
  try {
    //get all cart items based on user_id and its product details
    const cart = await CartModel.find({ user_id: req.user._id });
    if (cart) {
      const cartItems = [];

      //sort the cart items based on the updatedAt
      cart.sort((a, b) => {
        return b.updatedAt - a.updatedAt;
      });
      //get the product details for each cart item
      for (let i = 0; i < cart.length; i++) {
        const product = await ProductModel.findOne({
          _id: cart[i].item_id,
        });
        cartItems.push({
          id: cart[i]._id,
          product: product,
          quantity: cart[i].quantity,
          updatedAt: cart[i].updatedAt,
        });
      }

      return res.status(200).json({
        data: cartItems,
      });
    } else {
      return res.status(400).json({
        message: "No items in cart",
      });
    }
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = {
  addToCart,
  getOneCartItem,
  getMyCart,
};
