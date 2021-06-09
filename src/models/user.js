const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 1,
        max: 20,
        trim:true
    },
    lastName:{
        type: String,
        required: true,
        min: 1,
        max: 20,
        trim:true
    },
    userName:{
        type: String,
        required: true,
        trim:true,
        unique: true,
        index: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true,
        // lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contact:{
        type:String,
    },
    profilePicture:{
        type: String
    },
}, {timeStamps: true})

userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
})

userSchema.virtual('fullName').get(function(){
    return `${this.firstName}  ${this.lastName}`
})

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}
module.exports = mongoose.model('User', userSchema);


