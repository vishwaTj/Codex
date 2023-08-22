"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = 3000;
const connectDB = require("./config/db");
console.log(process.env.PORT);
connectDB();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", require("./Routes/User"));
app.use(notFound);
app.use(errorHandler);
app.listen(port, (err) => {
    if (err) {
        console.log(`Error connecting to the port ${err}`);
    }
    console.log(`Server up and running on port : ${port}`);
});
