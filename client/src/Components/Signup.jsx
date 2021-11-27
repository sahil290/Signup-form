import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
  });
  //creating function to setInput 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  //Creating a function that will gonna take the inputs of user
  const handleClick = (event) => {
    event.preventDefault();
    const newUser = {
      firstName : input.firstName,
      lastName : input.lastName,
      email : input.email,
      age : input.age,
      password : input.password
    }
    //Sending post request of userData to our Data Base//
    axios.post("http://localhost:8000/user", newUser);
    console.log(newUser);
  }
  return (
//SIGNUP FORM//
    <form className="signup-form mt-5">
      <div className="form-group">
        <label>
          FirstName
          <input
            value={input.firstName}
            onChange={handleChange}
            name="firstName"
            type="text"
            className="form-control"
            placeholder="FirstName"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          LastName
          <input
            value={input.lastName}
            onChange={handleChange}
            name="lastName"
            type="text"
            className="form-control"
            placeholder="LastName"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email
          <input
            value={input.email}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Age
          <input
            value={input.age}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="age"
            placeholder="Age"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Password
          <input
            value={input.password}
            onChange={handleChange}
            type="text"
            className="form-control"
            name="password"
            placeholder="Password"
          />
        </label>
      </div>
      <br />
      <button onClick = {handleClick} className="btn btn-success btn-lg">Signup</button>
    </form>
  );
};
export default Signup;
