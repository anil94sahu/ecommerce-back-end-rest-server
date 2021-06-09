const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim: true,
    },
    slug:{
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true,
    },
    quantity: {type: Number, required : true},
    description: {
        required : true,
        type : String,
        trim: true
    },
    offer : {
        type : Number,
    },
    productPicture : [
        {img: {type: String}}
    ],
    reviews : {
        type : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
        review : String,
    },
    category: {type : mongoose.Schema.Types.ObjectId, ref: 'Category', required : true},
    createdBy: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedAt: {type: Date}

}, {timeStamps: true})

module.exports = mongoose.model('Product', productSchema)