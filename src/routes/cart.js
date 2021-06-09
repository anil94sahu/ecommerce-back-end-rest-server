const express = require('express');
const { requireSignIn, userMiddleWare, adminMiddleWare } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignIn,  addItemToCart)



module.exports = router;