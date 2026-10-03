
const mongoose = require('mongoose');

const rescuerSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})


// We are generating token 

const  Rescuer = mongoose.model('RESCUER_COLLECTION',rescuerSchema);
module.exports = Rescuer;