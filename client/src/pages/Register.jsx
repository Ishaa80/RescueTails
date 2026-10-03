import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './css/Register.css';

export const Register = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    fname: "",
    phone: "",
    address: "",
    pincode: "",
    animal_found: "",
    wound_d: "",
    reportdate: "",
  });

  console.log(inpval)
  const setVal = (e) => {
   
    let name = e.target.name;
    let value = e.target.value;

    
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      }
    })
  };

  const PostData = async (e) => {
  e.preventDefault();
  const { fname, phone, reportdate, address, pincode, animal_found, wound_d } = inpval;
  if (fname === "") {
    alert("Name is required!");
  } else if (phone === "") {
    alert("Phone number is required!");
  } else if (isNaN(phone) || phone.length !== 10) {
    alert("Phone must be a 10-digit number!");
  } else if (reportdate === "") {
    alert("Report date is required!");
  } else if (address === "") {
    alert("Address is required!");
  } else if (isNaN(pincode) || pincode.length !== 6) {
    alert("Pincode must be a 6-digit number!");
  } else if (animal_found === "") {
    alert("Animal found details are required!");
  } else if (wound_d === "") {
    alert("Wound details are required!");
  } else {
    const data = await fetch("http://localhost:8000/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, reportdate, phone, address, pincode, animal_found, wound_d
      })
    });
    const res = await data.json();
    if (res.status === 201) {
      alert("Data submitted successfully!");
      setInpval({ ...inpval, fname: "", reportdate: "", phone: "", address: "", pincode: "", animal_found: "", wound_d: "" });
      navigate('/');
    } else {
      alert("Form submission failed. Please check your details and try again.");
    }
  }
};

return (
  <section className="reg_registration-section">
    <div className="reg_registration-form">
    <h2 className="reg-heading">PLEASE REPORT FOR HELP</h2>
      <form className="reg_registration-form-fields">
        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="fname">
            Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="enter your name"
            onChange={setVal}
            value={inpval.fname}
            required
            className="reg_form-input"
          />
        </div>
        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="enter phone number"
            id="phone"
            onChange={setVal}
            value={inpval.phone}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>

        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="reportdate">
            Report Date
          </label>
          <input
            type="date"
            name="reportdate"
            placeholder="enter report date"
            id="reportdate"
            onChange={setVal}
            value={inpval.reportdate}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>

        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="address">
            Address
          </label>
          <textarea
            type="address"
            name="address"
            placeholder="enter address"
            id="address"
            onChange={setVal}
            value={inpval.address}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>

        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="pincode">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            placeholder="enter pincode"
            id="pincode"
            onChange={setVal}
            value={inpval.pincode}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>

        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="animal_found">
            Animal Found
          </label>
          <input
            type="text"
            name="animal_found"
            placeholder="enter animal details"
            id="animal_found"
            onChange={setVal}
            value={inpval.animal_found}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>

        <div className="reg_form-group">
          <label className="reg_label-content" htmlFor="wound_d">
            Wound Detail
          </label>
          <input
            type="text"
            name="wound_d"
            placeholder="enter wound detail"
            id="wound_d"
            onChange={setVal}
            value={inpval.wound_d}
            required
            autoComplete="off"
            className="reg_form-input"
          />
        </div>
        <button className="reg_register-submit" type="submit" onClick={PostData}>
          ENTER DATA
        </button>
      </form>
    </div>
  </section>
);
};
