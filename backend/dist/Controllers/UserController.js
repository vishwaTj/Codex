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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateToken_1 = __importDefault(require("../config/generateToken"));
const User = require("../Models/User");
//  User sign up function /////////////////////////
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
            });
            if (user) {
                res.status(201).json({
                    message: "User successfully created",
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    token: (0, generateToken_1.default)(user._id),
                });
            }
            else {
                res.status(400).json({
                    message: `There was an error registering the user`,
                });
            }
        }
        catch (error) {
            console.log(`There is an error registering error: ${error}`);
        }
    });
};
//  User sign in function  //////////////////////////////
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
        if (user && (yield user.matchPassword(password))) {
            res.status(200).json({
                message: "User successfully created",
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                token: (0, generateToken_1.default)(user._id),
            });
        }
        else {
            res.status(400);
            throw new Error(`Please Enter the correct password`);
        }
    }
    catch (error) {
        res
            .status(400)
            .json({ message: `There was an error logging in error:${error}` });
    }
});
module.exports.UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const filter = { email: data.email };
        const user = yield User.findOneAndUpdate(filter, data);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: `Error while updating the info` });
    }
});
