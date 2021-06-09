const express = require('express');
const { requireSignIn } = require('../common-middleware');
const { signout } = require('../controller/admin/auth');
const router = express.Router();
const {signup, signin} = require('../controller/auth');
const {isRequestValidated, validateSignupRequest, validateSigninRequest}  = require('../validators/auth');



router.post('/signin',validateSigninRequest,isRequestValidated, signin)

router.post('/signup',validateSignupRequest, isRequestValidated, signup)

router.post('/signout',requireSignIn, signout)

/* router.post('/profile', requireSignIn, (req, res) => {
    res.status(200).json({message : 'Profile page'})
}) */

module.exports = router;