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
  const { _id } = req.user;
  const body = req.body;
  const data = {
    nameFirst: body.nameFirst,
    nameLast: body.nameLast,
    email: body.email,
    phoneNumber: body.phoneNumber,
    gender: body.gender,
    dateOfBirth: {
      month: body.month,
      day: body.day,
      year: body.year,
    },
  };

  try {
    const user = await UserModel.findByIdAndUpdate(_id, data);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const getUserDetails = async (req, res) => {
  const { _id } = req.user;
  try {
    const result = await UserModel.findById(_id);
    if (!result) {
      return res.json({
        message: "User not found",
      });
    }
    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUserById,
  updateUserById,
  getUserDetails,
};
