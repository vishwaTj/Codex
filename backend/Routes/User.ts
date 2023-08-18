import express from "express";

const router = express.Router();

const UserController = require("../Controllers/UserController");

router.post("/SignUp", UserController.SignUp);
router.post("/SignIn", UserController.SignIn);
router.post("/Update", UserController.UpdateUser);

module.exports = router;
