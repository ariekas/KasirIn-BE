const express = require("express");
const router = express.Router();
const { getAllUser, createUser } = require("../controllers/user");

router.post('/create', createUser);
router.get('/', getAllUser)

module.exports = router
