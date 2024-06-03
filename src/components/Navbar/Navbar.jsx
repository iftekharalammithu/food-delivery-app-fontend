import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../frontend_assets/assets";

const Navbar = () => {
  const [menu, setmenu] = useState("");
  return (
    <div className="navbar">
      <img className="logo-img" src={assets.logo} alt="Logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="navbar-button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
