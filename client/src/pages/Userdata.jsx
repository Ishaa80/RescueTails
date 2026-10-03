import React, { useState, useEffect } from "react";
import "./css/Userdata.css"

export const Userdata = () => {
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/details", {
        method: "GET",
      });

      const data = await response.json();
      console.log(`users ${JSON.stringify(data)}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserDetail = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/details/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(`Delete Detail: ${JSON.stringify(data)}`);
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="r-data-info ">
      <div className="r-data-heading">
        <h3>LIST OF ANIMALS TO BE RESCUED.. </h3>
      </div>
        <div className="r-data-container-info">
          <table className="r-data-tabledata">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone </th>
                <th>Address</th>
                <th>Pincode </th>
                <th>Animal Found </th>
                <th>Injury</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {users.map((curUser, index) => {
              return (
              <tr key={index}>
                <td>{curUser.fname}</td>
                <td>{curUser.phone}</td>
                <td>{curUser.address}</td>
                <td>{curUser.pincode}</td>
                <td>{curUser.animal_found}</td>
                <td>{curUser.wound_d}</td>
                <td>
                    <button className="r-data-button" onClick={() => deleteUserDetail(curUser._id)}>Delete</button>
                </td>
              </tr>
              );
            })}
            </tbody>
          </table>
      </div>
      </section>
    </>
  );
};