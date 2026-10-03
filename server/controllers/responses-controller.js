
const Response = require("../model/responseSchema");
const getAllResponses = async(req, res) => {
    try{
        const responses = await Response.find();
        if(!responses || responses.length == 0){
            return console.log("No data");
        }
        res.status(200).json(responses);
    }catch(error){
        next(error);
    }
}

module.exports = getAllResponses;