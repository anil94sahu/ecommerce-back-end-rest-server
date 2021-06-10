const express = require('express');
const { requireSignIn, adminMiddleWare } = require('../common-middleware');
const router = express.Router();
const { addCategory, getCategory } = require('../controller/category');
const multer = require('multer');
const path = require('path');
const shortId = require('shortid');
    
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname)) + '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })

router.post('/category/create', requireSignIn, adminMiddleWare, upload.single('categoryImage'),  addCategory)
router.get('/category/getcategory',  getCategory)



module.exports = router;