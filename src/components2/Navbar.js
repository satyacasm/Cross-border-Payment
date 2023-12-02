// Navbar.js
import React from "react";
import "./Navbar.css";
import image from "../images/crosspay-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="dark-header">
      <nav className="navbar_container">
        <div className="name">
          <img src={image} width={500} height={500}></img>
          
        </div>
        <ul>
          <Link to="/"><button className="homeButton">Home</button></Link>
          <li>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
