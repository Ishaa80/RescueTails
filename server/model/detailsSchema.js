
const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    reportdate:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    animal_found:{
        type:String,
        required:true
    },
    wound_d:{
        type:String,
        required:true
    },
})

// We are generating token 

const  Details = mongoose.model('DETAILS_COLLECTION', detailsSchema);
module.exports = Details;