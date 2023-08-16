import { matchedData, validationResult } from "express-validator";

const User = require("../Models/User");

type user = {
  name: String;
  email: String;
  password: string;
  avatar: String;
};

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
    })
      .then(res.status(200).json({ message: "User successfully registered" }))
      .catch((error: any) => {
        res.status(400).json({
          message: `There was an error registering the user ${error}`,
        });
      });
  } catch (error) {
    console.log(`There is an error registering error: ${error}`);
  }
};

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

    if (user.password !== password) {
      res.status(400);
      throw new Error(`Please Enter the correct password`);
    }

    res.status(200).json({ user });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: `There was an error logging in error:${error}` });
  }
};
