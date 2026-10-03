
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    animal_type:{
        type:String,
        required:true
    },
    injury:{
        type:String,
        required:true
    },
    treatment_date:{
        type:String,
        required:true
    },
})


// We are generating token 

const Response = mongoose.model('RESPONSE_COLLECTION', responseSchema);
module.exports = Response;