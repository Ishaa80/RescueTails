
const Details = require("../model/detailsSchema");
const getAllUsersData=async(req,res)=>{
    try {
        const details= await Details.find();
        if(!details || details.length==0){
            return res.status(404).json({ message: "No user details found" });
        }
        res.status(200).json(details);
    }catch(error){
        next(error);
    }
};

const deleteDetailfoById = async (req, res) => {
    try {
        const id = req.params.id;
        await Details.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Details Deleted Successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


module.exports = { getAllUsersData, deleteDetailfoById } ;