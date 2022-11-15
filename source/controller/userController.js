const User = require("../model/User");

// Getting all users

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    } 
    res.status(200).json({
      success: true,
      message: "Users Found",
      users,
      count: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get A Single User

exports.getSingleUser = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    };
    return res.status(200).json({
      success: true,
      message: "User Found",
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create User
exports.createUser = async (req, res) => {
  try {
    let user = await req.body;
    let created = await User.create(user);
    if (!created) {
      return res.status(400).json({
        success: false,
        message: "User not Created",
      });
    } return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: created
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message
    });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    let user = await req.body;
    let id = {_id: req.params.id};
    let updated = await User.findByIdAndUpdate(id, user);
    if (!updated) {
      return res.status(400).json({
        success: false,
        message: "User Not Updated Successfully",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message
    });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await User.deleteOne(id);
    if (!deleted) {
      return res.status(400).json({
        success: false,
        message: 'User Not Deleted Successfully'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User Deleted Successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message
    });
  }
};