import React, { useState } from "react";
import { Form } from "react-router-dom";
import Link from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} class="signinForm">
        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            class="form-control"
          />
          <label class="form-label" for="form2Example1">
            Full Name
          </label>
        </div>
        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            class="form-control"
          />
          <label class="form-label" for="form2Example1">
            Age
          </label>
        </div>
        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="email"
            id="Email"
            value={formData.email}
            onChange={handleChange}
            class="form-control"
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            class="form-control"
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>
        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="password"
            value={formData.cpassword}
            onChange={handleChange}
            id="password"
            class="form-control"
          />
          <label class="form-label" for="form2Example2">
            Confirm Password
          </label>
        </div>

        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          class="btn btn-primary btn-block mb-4"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Signup;
