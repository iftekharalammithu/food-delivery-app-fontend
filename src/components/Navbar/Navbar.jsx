import React from "react";
import "./Navbar.css";
import { assets } from "../../frontend_assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo-img" src={assets.logo} alt="Logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
