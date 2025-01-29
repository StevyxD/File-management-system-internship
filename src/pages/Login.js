import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="signinForm">
        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="email"
            id="Email"
            value={email}
            onChange={handleEmailChange}
            class="form-control"
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
            class="form-control"
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        {/* <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}

        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          class="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>

        <div class="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
