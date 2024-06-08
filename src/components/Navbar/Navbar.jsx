import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../frontend_assets/assets";
import { Link } from "react-router-dom";
import { Storecontext } from "../../Context/Storecontext";

const Navbar = ({ setshowlogin }) => {
  const { gettotalcartamount } = useContext(Storecontext);
  const [menu, setmenu] = useState("");
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo-img" src={assets.logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="/#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="/#app-download"
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {gettotalcartamount() > 0 ? <div className="dot"></div> : <></>}
        </div>
        <button onClick={() => setshowlogin(true)} className="navbar-button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
