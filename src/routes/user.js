const express = require("express");
const router = express.Router();
const {crud} = require("../middleware")
const { getAllUser, createUser, deleteUser} = require("../controllers/user");

router.post('/create', crud.checkRole('admin'), createUser);
router.get('/', getAllUser)
router.delete('/delete/:id', crud.checkRole('admin'), deleteUser)


module.exports = router
