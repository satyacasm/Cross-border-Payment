// Navbar.js
import React from "react";
import "./Navbar.css";
import image from "../images/add-money.webp";

const Navbar = () => {
  return (
    <header className="dark-header">
      <nav className="navbar_container">
        <div className="name">
          <img src={image}></img>
          <h3 className="logo">CrossPay</h3>
        </div>
        <ul>
          <li>Home</li>
          <li>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
