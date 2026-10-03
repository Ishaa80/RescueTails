import './css/Contact.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    fname: "", email: "", message: ""
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
    const { fname, email, message } = inpval;
    if (fname === "") {
      alert("Please enter your name. It is required!");
    }
    else if (email === "") {
      alert("Please enter your email. It is required!");
    }
    else if (!email.includes("@")) {
      alert("Your email must include the '@' symbol!")
      }
    else if (message === "") {
      alert("Please enter your message. It is required!");
    }
    
    else {
      const data = await fetch("http://localhost:8000/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, message
        })
      });
      const res = await data.json();
      if (res.status === 201) {
        alert("Feedback Sent Successfully !");
        setInpval({ ...inpval, fname: "", email: "",message:""});
        navigate('/');
      }
      else 
      {
        alert("Feedback not Successfully");
      }
    }
  }
  
  return (
    <section className="contactpg-background-section">
<div className="contactpg-container">
  <div className="contactpg-contact-container">
    <div className="contactpg-contact-content">
      <h2 className='contact-heading1'>CONTACT US</h2>
      <p className='contact-heading'>
        Have questions or concerns? Reach out to us! We'd love to hear from you.
      </p>

      <form>
        <div className="form-group">
          <label className="contactpg-label-content" htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete='off'
            placeholder="enter your name"
            onChange={setVal}
            value={inpval.fname}
            required
          />
        </div>

        <div className="form-group">
          <label className="contactpg-label-content" htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            onChange={setVal}
            value={inpval.email}
            required
          />
        </div>

        <div className="form-group">
          <label className="contactpg-label-content" htmlFor="message">Enter Your Message</label>
          <textarea
            className='contactpg-message-input'
            type="text"
            onChange={setVal}
            autoComplete='off'
            value={inpval.message}
            name="message"
            id="message"
            placeholder='enter your message' />
        </div>
        <button
          type='submit'
          className='contactpg-login-submit'
          id='signup'
          name='signop'
          onClick={PostData}>Submit</button>
      </form>
    </div>
  </div>
  <div className="contactpg-contact-info">
    <h2>GET IN TOUCH</h2>
    <img src="/images/orange-paw-vector.png" alt="Animal" className="animal-image" />
    <p>Phone: +1234567890</p>
    <p>Email: rescuetails@gmail.com</p>
    
  </div>
</div>
</section>
  );
};