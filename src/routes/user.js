const express = require("express");
const router = express.Router();
const { getAllUser, createUser, deleteUser} = require("../controllers/user");

router.post('/create', createUser);
router.get('/', getAllUser)
router.delete('/delete/:id', deleteUser)


module.exports = router
