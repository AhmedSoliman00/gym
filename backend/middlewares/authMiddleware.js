import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from 'jwt' cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
});

// Middleware to verify user ID
const verifyUserId = asyncHandler(async (req, res, next) => {
  if (req.user._id.toString() !== req.params.id) {
    res.status(401);
    throw new Error("Not authorized to access this user.");
  }
  next();
});

// Check for the Admin
const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
};

export { authenticate, verifyUserId, authorizeAdmin };