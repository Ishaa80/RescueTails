
const Contact = require("../model/Contactschema");
const getAllContactData=async(req,res, next)=>{
    try {
        const contact= await Contact.find();
        if(!contact || contact.length==0){
            return console.log("no data");
        }
        res.status(200).json(contact);
    }catch(error){
        next(error);
    }
};

const deleteUserContactById = async (req, res) => {
    try {
      const id = req.params.id;
      await Contact.deleteOne({ _id: id });
      return res.status(200).json({ message: "User Contactus Data Deleted Successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  const updateUsercontactById = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Use findByIdAndUpdate to find the contact by ID and update the information
      const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  
      // Check if the contact was not found
      if (!updatedContact) {
        return res.status(404).json({ error: "Contact not found" });
      }
  
      // Return the updated contact information
      return res.status(200).json({ message: "Contact Info Updated Successfully", contact: updatedContact });
    } catch (error) {
      // Handle any errors that might occur during the update process
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getAllContactData, deleteUserContactById, updateUsercontactById };