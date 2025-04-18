import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const router = express.Router();

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
        isSuccess: false,
        data: null,
      });
    }

    // Check if user exists
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(409).json({
        message: "User already exists.",
        isSuccess: false,
        data: null,
      });
    }

    // Validate password
    const isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters and contain at least one letter and one number.",
        isSuccess: false,
        data: null,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({
      message: "User created successfully",
      isSuccess: true,
      data: newUser,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Something went wrong on the server",
      isSuccess: false,
      data: null,
    });
  }
});
