
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; 
export const Login = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
     email: "", password: "",
  });

  const setVal = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInpval({ ...inpval, [name]: value });
  };

  const loginuser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (email === "") {
      alert("Please enter your email. It is required!");
    } else if (!email.includes("@")) {
      alert("Your email must include the '@' symbol!");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
    } else {
      const res = await fetch("http://localhost:8000/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.status === 201) {
        alert("Login Successful");
        navigate('/r_home');
        setInpval({ ...inpval, email: "", password: "" });
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted', formData);
  };

  return (
    <section>
      <div className="login-container">
        <div className="login-card">
          <div className="card-body">
            <h2 className="login-welcome-heading">Welcome, Rescuers!</h2>

            
            <form onSubmit={loginuser} className="login-form">
              <div className="input-group form-group">
                <label htmlFor="email" className="login-form-label">Enter Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email address"
                  onChange={setVal}
                  value={inpval.email}
                  id="email"
                  className="login-form-input"
                  required
                />
              </div>

              <div className="input-group form-group">
                <label htmlFor="password" className="login-form-label">Enter Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  onChange={setVal}
                  value={inpval.password}
                  id="password"
                  className="login-form-input"
                  required
                />
              </div>

              <button type="submit" className="loginpage-submit">LOGIN</button>
            </form>
            <div className="login-link-register">
              <Link to="/R_register">Don't have an account? Register as a Rescuer</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};