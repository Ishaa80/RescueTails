// R_register.jsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './css/R_register.css';

export const R_register = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: ""
  });

  const setVal = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inpval;
    if (fname === "") {
      alert("Please enter your name. It is a required field!");
    } else if (email === "") {
      alert("Please enter your email. It is a required field");
    } else if (!email.includes("@")) {
      alert("Your email must include the '@' symbol!");
    } else if (password === "") {
      alert("Please enter your password. It is a required field!");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
    } else {
      const data = await fetch("http://localhost:8000/rescuer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, password
        })
      });
      const res = await data.json();
      if (res.status === 201) {
        alert("Registration successful! You can now log in with your credentials.");
        setInpval({ ...inpval, fname: "", email: "", password: "" });
        navigate('/login');
      } else {
        alert("Registration Unsuccessful!");
      }
    }
  }

  return (
    <section className='r_container'>
      <div className="r-registration-form">
        <h2 className="r_welcome-heading">REGISTER</h2>
        <form className='r_formdata'>
          <div className="r_form-group">
            <label className="r_label-content" htmlFor="fname">Enter Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              autoComplete='off'
              placeholder="enter your name"
              onChange={setVal}
              value={inpval.fname}
              required
              className="r_form-input"
            />
          </div>
          <div className="r_form-group">
            <label className="r_label-content" htmlFor="email">Enter Email ID </label>
            <input
              type="email"
              name="email"
              placeholder="enter email id"
              onChange={setVal}
              value={inpval.email}
              id="email"
              required
              className="r_form-input"
            />
          </div>
          <div className="r_form-group">
            <label className="r_label-content" htmlFor="password">Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              id="password"
              onChange={setVal}
              value={inpval.password}
              required
              autoComplete="off"
              className="r_form-input"
            />
          </div>
          <button
            type='submit'
            className='r_login-submit'
            id='signup'
            name='signop'
            onClick={PostData}
          >REGISTER
          </button>
        </form>
      </div>
    </section>
  )
};
