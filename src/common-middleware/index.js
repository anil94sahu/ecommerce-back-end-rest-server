const jwt = require('jsonwebtoken');

exports.requireSignIn = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    } else{
        res.status(401).json({message:"Authorization required"})
    }
    next();
}

exports.userMiddleWare = (req, res, next) => {
    if(req.user.role !== "user"){
        res.status(400).json({message: "User access denied"})
    }
    next();
}

exports.adminMiddleWare = (req, res, next) => {
    if(req.user.role !== "admin"){
        res.status(400).json({message: "Admin access denied"})
    }
    next();
}