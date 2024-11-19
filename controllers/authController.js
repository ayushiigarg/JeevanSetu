const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper function to send email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// REGISTER CONTROLLER
const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const user = new userModel(req.body);
    await user.save();

    // Send registration email
    await sendEmail(
      req.body.email,
      "Welcome to JeevanSetu",
      `Hi ${req.body.name},\n\nThank you for registering with JeevanSetu!\n\nWe're thrilled to have you on board. You can now start using our platform to contribute and make a difference. Whether you're here to donate, seek help, or connect with others, we're here to support you every step of the way.\n\nThank you for joining us, and together, we can save lives!\n\nBest regards,\nThe JeevanSetu Team`
    );

    return res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

// LOGIN CONTROLLER
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Role Does Not Match",
      });
    }

    const comparePassword = await bcrypt.compare(req.body.password, user.password);
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Send login notification email
    await sendEmail(
      user.email,
      "Login Notification",
      `Hi ${user.name},\n\nYou have successfully logged into your JeevanSetu account.\n\nFeel free to explore the platform, make donations, track your activities, or connect with others.\n\nIf you encounter any issues, don't hesitate to reach out to our support team.\n\nBest regards,\nThe JeevanSetu Team`
    );

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

// GET CURRENT USER
const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get current user",
      error,
    });
  }
};

// GET ACTIVE USERS BY ROLE
const activeUsersByRoleController = async (req, res) => {
  try {
    const { role } = req.body;
    const activeUsers = await userModel.find({ isActive: true, role: role });
    if (activeUsers.length === 0) {
      return res.status(200).send({
        success: true,
        message: "No users found for the specified role",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Active users fetched successfully",
      users: activeUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get active users by role",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
  activeUsersByRoleController,
};
