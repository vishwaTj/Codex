"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(`Error connecting to the port ${err}`);
    }
    console.log(`Server up and running on port : ${port}`);
});
