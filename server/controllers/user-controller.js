const User = require("../model/RescuerSchema");

//Data Fetch
const getAllUserInfo=async(req,res , next)=>{
    try {
        const user= await User.find();
        if(!user || user.length==0){
            return console.log("no data");
        }
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
};

//Data Deletion
const deleteUserinfoById = async (req, res) => {
    try {
      const id = req.params.id;
      await User.deleteOne({ _id: id });
      return res.status(200).json({ message: "User Info Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const updateUserById = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      return res.status(200).json({ message: "User Info Updated Successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getAllUserInfo, deleteUserinfoById, updateUserById };
