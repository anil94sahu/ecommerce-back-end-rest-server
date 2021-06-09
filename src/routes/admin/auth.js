const express = require('express');
const { requireSignIn } = require('../../common-middleware');
const {signup, signin, signout } = require('../../controller/admin/auth');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signin',validateSigninRequest,isRequestValidated,  signin)

router.post('/admin/signup',validateSignupRequest, isRequestValidated, signup)

router.post('/admin/signout',requireSignIn, signout)


/* router.post('/profile', requireSignIn, (req, res) => {
    res.status(200).json({message : 'Profile page'})
}) */

module.exports = router;