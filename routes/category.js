const express = require('express');
const router = express.Router();

const { create } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require("../controllers/user");


//get method
router.param('userId', userById );

router.post('/category/create/:userId',requireSignin, isAuth, isAdmin, create);


module.exports = router;