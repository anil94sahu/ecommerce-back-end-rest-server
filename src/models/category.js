const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        trim: true,
    },
    slug:{
        type : String,
        require : true,
        unique : true
    },
    categoryImage : {type : String},
    parentId : {
        type : String
    }
}, {timeStamps: true})

module.exports = mongoose.model('Category', categorySchema)