import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-light bg-blue">
        <Link className="navbar-brand headNav" to="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item active p-3">
              <Link class="nav-a" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link class="nav-a" to="/upload">
                File Upload
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link class="nav-a" to="/login">
                Login/Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
