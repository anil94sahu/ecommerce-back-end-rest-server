const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId , ref : 'User'},
    cartItems : [{ 
        product :{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' , required: true},
        price: { type:Number, required: true},
        quantity: { type: Number, default: 1},
    }]

}, {timeStamps: true})

module.exports = mongoose.model('Cart', cartSchema)