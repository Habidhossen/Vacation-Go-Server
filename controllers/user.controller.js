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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.makeAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email: email };
    const updateDoc = {
      $set: { role: "admin" },
    };
    const result = await User.updateOne(filter, updateDoc);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    const isAdmin = user?.role === "admin";
    res.status(200).json({
      status: "success",
      admin: isAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
