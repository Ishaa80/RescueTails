import React, { useState } from 'react';
import './css/Response.css';
import { useNavigate } from 'react-router-dom'


export const Response = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    fname: "", animal_type:"", injury:"", treatment_date:"" 
  });
 console.log(inpval)
 const setVal = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  setInpval(() => {
    return {
      ...inpval,
      [name]: value
    }
  })
 };
 const PostData = async (e) => {
  e.preventDefault();
  const { fname, animal_type, injury, treatment_date } = inpval;

  if (fname === "") {
    alert("Name is mandatory!");
  } else if (animal_type === "") {
    alert("Animal type cannot be empty!");
  } else if (injury === "") {
    alert("Injury cannot be empty!");
  } else if (treatment_date === "") {
    alert("Treatment date cannot be empty!");
  } else {
    const data = await fetch("http://localhost:8000/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        animal_type,
        injury,
        treatment_date,
      }),
    });

    const res = await data.json();
    if (res.status === 201) {
      alert("Response submitted successfully!");
      setInpval({ ...inpval, fname: "", animal_type: "", injury: "", treatment_date: "" });
      navigate('/r_home');
    } else {
      alert("Error: Data already exists or another issue occurred. Please try again.");
    }
  }
}


return (
  <section className='section-res'>
    
    <div className="response-container">
    <div className="response-content">
      <h2 className='res-heading'>Provide Response to the Users</h2>
      <form>
        <div className="res-form-group">
          <label className="res-label-content" htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete='off' 
            placeholder="enter Name"
            onChange={setVal} 
            value={inpval.fname}
            required
          />
        </div>

        <div className="res-form-group">
          <label className="res-label-content" htmlFor="animal_type">Animal Type</label>
          <input
            type="text"
            id="animal_type"
            name="animal_type"
            placeholder="enter Animal Type"
            onChange={setVal} 
            value={inpval.animal_type}
            required
          />
        </div>

        <div className="res-form-group">
          <label className="res-label-content" htmlFor="injury">Injury type</label>
          <input 
            type="text"
            id="injury"
            name="injury"
            placeholder="enter Injury Type"
            onChange={setVal} 
            value={inpval.injury}
            required
        />
        </div>

        <div className="res-form-group">
          <label className="res-label-content" htmlFor="treatment_date">Date of Treatment</label>
          <input 
            type="date"
            id="treatment_date"
            name="treatment_date"
            onChange={setVal} 
            value={inpval.treatment_date}
            required
        />
        </div>

        <button 
            type='submit' 
            className='login-submit' 
            id='signup' 
            name='signop' 
            onClick={PostData}>Submit</button>
      </form>
    </div>
  </div>
  </section>
);
};