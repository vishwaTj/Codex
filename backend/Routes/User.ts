import express from "express";

const router = express.Router();

const UserController = require("../Controllers/UserController");

router.post("/createUser", UserController.newUser);

module.exports = router;
