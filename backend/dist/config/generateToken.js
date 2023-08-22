"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
console.log(process.env.monogo_pass);
let secret = String(process.env.JWT_SECRET);
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, secret, {
        expiresIn: "30d",
    });
};
// modle.exports = generateToken;
exports.default = generateToken;
