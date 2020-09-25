const express = require('express');
const router = express.Router();

const { create, productById, read, remove } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require("../controllers/user");
const { update } = require('../controllers/product');

//get method
router.get('/product/:productId', read)
router.post('/product/create/:userId',requireSignin, isAuth, isAdmin, create);
router.put('/product/:productId/:userId', isAdmin, update);
router.delete('/product/:productId/:userId', isAdmin,  remove);


router.param('userId', userById );
router.param('productId', productById );




module.exports = router;