const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    } else {
      const userData = req.body;
      const user = new User(userData);
      await user.save();
      res.status(201).json({
        status: "success",
        message: "Data inserted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};
