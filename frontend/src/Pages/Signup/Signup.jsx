import React, { useState } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import Images from "../Images/Grammar-correction.svg";
import Radiobtn from "../Components/RadioBtn/Radiobtn";

const Signup = () => {
  // State to hold user input
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object to send to the backend
    const data = {
      Firstname: Firstname,
      Lastname: Lastname,
      Email: Email,
      Password: Password,
    };

    try {
      // Send data to backend (you need to implement this part)
      const response = await fetch("localhost:4400/api/student/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle response
      if (response.ok) {
        // Registration successful, you can redirect or do something else
        console.log("Registration successful");
      } else {
        // Registration failed, handle accordingly
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="section">
      <article className="article">
        <div className="logo-1">
          <img src="" alt="" />
          <h4 className="logo-head">logo</h4>
        </div>
        <div className="header">
          <h3 className="head">WELCOME</h3>
          <h4 className="Sub-head">join us today !!</h4>
        </div>

        <div className="inpts">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-x input-4"
              placeholder="Firstname"
              value={Firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="input-x input-5"
              placeholder="Lastname"
              value={Lastname}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="text"
              className="input-x input-6"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              className="input-x input-7"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="rad-btns">
              <Radiobtn />
            </div>

            <div className="signupage">
              <span>Already have an account? </span>
              <NavLink to="/Login" style={{ color: "green" }} className="link">
                login
              </NavLink>
            </div>

            <button type="submit" className="btn-4">
              Signup
            </button>
          </form>
        </div>
      </article>

      {/* {rightsection} */}

      <div className="right-part">
        <img src={Images} alt="" className="imgs" />
      </div>
    </div>
  );
};

export default Signup;
