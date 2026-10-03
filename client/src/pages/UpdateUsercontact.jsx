// UpdateUsercontact.jsx
import React, { useState } from "react";
import "./css/UpdateUserContact.css";

const UpdateUsercontact = ({ formData, updateUserData , onCancel}) => {
  const [updatedData, setUpdatedData] = useState(formData);

  const handleInputChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  return (
    <section className="update-form">
      <h3>Update User Contact</h3>
      <form>
        <label>
          Name:
          <input type="text" name="fname" value={updatedData.fname || ''} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={updatedData.email || ''} onChange={handleInputChange} />
        </label>
        <label>
          Message:
          <input type="text" name="message" value={updatedData.message || ''} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={() => updateUserData(updatedData)}>Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </section>
  );
};

export default UpdateUsercontact;
