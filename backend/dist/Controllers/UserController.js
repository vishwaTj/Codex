"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../Models/User");
module.exports.SignUp = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password, avatar } = req.body;
            if (!name || !email || !password) {
                res.status(400);
                throw new Error("Please Enter all the Fields");
            }
            const userExists = yield User.findOne({ email });
            if (userExists) {
                res.status(400);
                throw new Error("User already exists");
            }
            const user = yield User.create({
                name,
                password,
                email,
                avatar,
            })
                .then(res.status(200).json({ message: "User successfully registered" }))
                .catch((error) => {
                res.status(400).json({
                    message: `There was an error registering the user ${error}`,
                });
            });
        }
        catch (error) {
            console.log(`There is an error registering error: ${error}`);
        }
    });
};
module.exports.SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw new Error(`Please fill the password  and email id fields`);
        }
        const user = yield User.findOne({ email });
        if (!user) {
            res.status(400);
            throw new Error(`User not found`);
        }
        if (user.password !== password) {
            res.status(400);
            throw new Error(`Please Enter the correct password`);
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: `There was an error logging in error:${error}` });
    }
});
module.exports.Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log("data");
        const user = yield User.findOneAndUpdate({ email: data.email }, data);
        console.log(user);
        console.log(user);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: `Error while updating the info` });
    }
});
