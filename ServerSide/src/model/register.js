const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:Object
    }
})

const Register = new mongoose.model("Register" , registerSchema);
module.exports = Register