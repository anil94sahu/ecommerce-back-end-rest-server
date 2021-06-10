const express = require('express');
const { requireSignIn, adminMiddleWare } = require('../common-middleware');
const { addProduct } = require('../controller/product');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const shortId = require('shortid');
// const { addCategory, getCategory } = require('../controller/category');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname)) + '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })
  

router.post('/product/create', requireSignIn, adminMiddleWare, upload.array('productPicture'), addProduct)
// router.get('/product/getcategory',  getCategory)



module.exports = router;