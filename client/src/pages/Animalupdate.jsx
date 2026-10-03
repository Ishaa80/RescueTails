import React, { useState, useEffect } from "react";
import "./css/AnimalUpdate.css";

export const Animalupdate = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getAllResponses = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/responses", {
        method: "GET",
      });
  
      const data = await response.json();
      console.log(`users ${JSON.stringify(data)}`);
      setUsers(data);
      setFilteredUsers(data); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  
    const filteredData = users.filter((user) =>
      user.fname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };
  
  useEffect(() => {
    getAllResponses();
  }, []);  

  return (
    <>
      <section className="response-info ">
        <div className="response-heading">
          <h3>LIST OF RESCUED ANIMALS</h3>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="container-res">
          <table className="res-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Animal Type</th>
                <th>Injury</th>
                <th>Date of Treatment</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.fname}</td>
                  <td>{curUser.animal_type}</td>
                  <td>{curUser.injury}</td>
                  <td>{curUser.treatment_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Animalupdate;