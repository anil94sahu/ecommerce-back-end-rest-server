const {check, validationResult} =  require('express-validator');

exports.validateSignupRequest = [
    check('firstName').
    notEmpty().withMessage('firstName is required'),
    check('lastName').
    notEmpty().withMessage('lastName is required'),
    check('email')
    .isEmail().withMessage('Valid email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long')
];

exports.validateSigninRequest = [
    check('email')
    .isEmail().withMessage('Valid email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long')
];

exports.isRequestValidated = (req,res,next) => {
    const error = validationResult(req);
    if(error.array().length > 0){
        res.status(400).json({error: error.array()[0].msg})
    }
    next();
}