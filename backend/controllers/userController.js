import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

// Handling User Infromation From Front End
const createUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  // ------------------------------------

  // Check if user exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("This Email is already taken");
  }

  // ------------------------------------

  // salt the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // ------------------------------------

  const newUser = new User({ username, email, password: hashedPassword });

  //   Insert User To DB
  try {
    await newUser.save();
    createToken(res, newUser._id);
    //  A message for the user
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const PasswordValid = await bcrypt.compare(password, existingUser.password);

    if (PasswordValid) {
      createToken(res, existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });

      return;
    } else {
      res.status(401);
      throw new Error("Incorrect Password");
    }
  } else {
    res.status(404);
    throw new Error("Email Not Registered");
  }
});

// Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    path: '/', // Ensure the path matches the one used when setting the cookie
    expires: new Date(0), // Set the cookie to expire immediately
  });
  console.log("Logged out successfully");
  res.status(200).json({ message: "Logged out successfully" });
});
// Get User's Info
const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

// Update User's Info
const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword;
      }

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User Not Found.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
};
