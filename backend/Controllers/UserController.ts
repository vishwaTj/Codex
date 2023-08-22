import { matchedData, validationResult } from "express-validator";
import generateToken from "../config/generateToken";

const User = require("../Models/User");

type user = {
  name: String;
  email: String;
  password: string;
  avatar: String;
};

//  User sign up function /////////////////////////
module.exports.SignUp = async function (req?: any, res?: any) {
  try {
    const { name, email, password, avatar } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      password,
      email,
      avatar,
    });

    if (user) {
      res.status(201).json({
        message: "User successfully created",
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: `There was an error registering the user`,
      });
    }
  } catch (error) {
    console.log(`There is an error registering error: ${error}`);
  }
};

//  User sign in function  //////////////////////////////
module.exports.SignIn = async (req?: any, res?: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error(`Please fill the password  and email id fields`);
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error(`User not found`);
    }

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        message: "User successfully created",
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error(`Please Enter the correct password`);
    }
  } catch (error: any) {
    res
      .status(400)
      .json({ message: `There was an error logging in error:${error}` });
  }
};

module.exports.UpdateUser = async (req?: any, res?: any) => {
  try {
    const data = req.body;
    const filter = { email: data.email };
    const user = await User.findOneAndUpdate(filter, data);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: `Error while updating the info` });
  }
};
