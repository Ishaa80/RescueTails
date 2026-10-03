import React, { useState, useEffect } from "react";
import "./css/Userinfo.css";
import UpdateUserinfo from "./UpdateUserinfo"; // Import the UpdateUserinfo component


export const Userinfo = () => {
  const [users, setUsers] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState({}); // Add formData state
  const [selectedUserId, setSelectedUserId] = useState(null);


  const getAllUsersInfo = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/rescuer", {
        method: "GET",
      });

      const data = await response.json();
      console.log(`users ${JSON.stringify(data)}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };


  //new
  const deleteUserData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/rescuer/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(`Delete Info: ${JSON.stringify(data)}`);
      if (response.ok) {
        getAllUsersInfo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserData = async (updatedData) => {
    try {
      const id = updatedData._id;
      const response = await fetch(`http://localhost:8000/api/admin/rescuer/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        getAllUsersInfo();
        setShowUpdateForm(false);
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
    getAllUsersInfo();
  }, []);

  return (
    <>
      <section className="r-info ">
      <div className="r-info-heading">
        <h3>LIST OF RESCUERS </h3>
      </div>
        <div className="container-rescuerinfo">
          <table className="r-info-tabledata">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.fname}</td>
                  <td>{curUser.email}</td>
                  <td>
                    <button className="r-info-button" onClick={() => setUpdateData(curUser)}>Update</button>
                  </td>
                  <td>
                    <button className="r-info-button" onClick={() => deleteUserData(curUser._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {showUpdateForm && (
        <UpdateUserinfo formData={formData} 
        updateUserData={updateUserData} 
        onCancel={cancelUpdate}/>
        
      )}
    </>
  );
};