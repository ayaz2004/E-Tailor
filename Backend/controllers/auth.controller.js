import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import ApiResponse from "../utils/apiResponse.js";

export const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    !role ||
    username === "" ||
    email === "" ||
    password === "" ||
    role === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role,
  });
  try {
    await newUser.save();
    res
      .status(201)
      .json(new ApiResponse(200, "Signup successfully", newUser.username));
  } catch (error) {
    next(errro);
  }
};
