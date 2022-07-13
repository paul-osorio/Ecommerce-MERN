const UserModel = require("../models/user");

const getUserById = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findById(_id);
    if (!user) {
      return res.json({
        message: "User not found",
      });
    }
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const updateUserById = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await UserModel.findByIdAndUpdate(_id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getUserById,
  updateUserById,
};