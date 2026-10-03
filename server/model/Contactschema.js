
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    
})

const  Contact = mongoose.model('CONTACT_COLLECTION',contactSchema);
module.exports = Contact;