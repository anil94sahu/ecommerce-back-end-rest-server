const  slugify  = require("slugify");
const Product = require("../models/product");

exports.addProduct =   (req, res) => {

    const {name, price, description, offer, reviews, category, createdBy, quantity}  = req.body;
    let productPicture = [];
    if(req.files.length > 0){
        productPicture = req.files.map(file => {return {img : file.filename}})
    };
    const product = new Product({
        name, price, description,offer, reviews, productPicture, category,createdBy : req.user._id
        , slug: slugify(req.body.name), updatedAt: Date.now(), quantity
    })
    product.save((error, product) => {
        if(error) res.status(400).json({error : error})
        if(product)res.status(200).json({message : product})
    })
    
    // res.status(200).json({file: req.files});
}