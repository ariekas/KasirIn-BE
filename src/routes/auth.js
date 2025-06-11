const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");
const { auth } = require("../middleware");

router.post("/login", auth.loginLimit, auth.validateLogin, auth.CheckAlreadyLogin, login);

module.exports = router;
