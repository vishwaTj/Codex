import express from "express";
import { validationResult, body } from "express-validator";

const router = express.Router();

const UserController = require("../Controllers/UserController");

router.post("/createUser", UserController.newUser);

module.exports = router;
