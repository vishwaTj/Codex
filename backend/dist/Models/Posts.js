"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostModel = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    Title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});
const Post = mongoose_1.default.model("Post", PostModel);
module.exports = Post;
