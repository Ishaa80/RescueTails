import React, { useState, useEffect } from "react";
import "./css/Usercontact.css";
import UpdateUsercontact from "./UpdateUsercontact"; 
export const Usercontact = () => {
  const [users, setUsers] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState({}); 
  const [selectedUserId, setSelectedUserId] = useState(null);


  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/Contactus", {
        method: "GET",
      });

      const data = await response.json();
      console.log(`users ${JSON.stringify(data)}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/Contactus/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(`Delete Contact: ${JSON.stringify(data)}`);
      if (response.ok) {
        getAllContactData();
        alert("Data Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const updateUserContact = async (updatedData) => {
    try {
      const id = updatedData._id;
      const response = await fetch(`http://localhost:8000/api/admin/Contactus/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        getAllContactData();
        setShowUpdateForm(false);
        alert("Data Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setUpdateData = (user) => {
    setFormData(user);
    setSelectedUserId(user._id);
    setShowUpdateForm(true);
  };

  const cancelUpdate = () => {
    setShowUpdateForm(false);
    setFormData({});
    setSelectedUserId(null);
  };


  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <>
      <section className="r-contact-info ">
      <div className="r-contact-heading">
        <h3>CONTACTUS FEEDBACK </h3>
      </div>
        <div className="r-container-contact">
          <table className="r-contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email </th>
                <th>Message</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {users.map((curUser, index) => {
              return (
              <tr key={index}>
                <td>{curUser.fname}</td>
                <td>{curUser.email}</td>
                <td>{curUser.message}</td>
                <td>
                <button className="r-contactbutton" onClick={() => setUpdateData(curUser)}>Update</button>

                </td>
                <td>
                    <button className="r-contactbutton" onClick={() => deleteUserContact(curUser._id)}>Delete</button>
                </td>
              </tr>
              );
            })}
            </tbody>
          </table>
      </div>
      </section>
      {showUpdateForm && (
      <UpdateUsercontact formData={formData} 
      updateUserData={updateUserContact}  
      onCancel={cancelUpdate}/>
      )}
    </>
  );
};