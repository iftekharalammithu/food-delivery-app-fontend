import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../frontend_assets/assets";

const Loginpopup = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("Sign In");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currstate === "Sign Up" ? (
            <input type="text" placeholder="Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currstate === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I Agree to the terms of use & Privacy Policy</p>
        </div>
        {currstate === "Sign Up" ? (
          <p>
            Already have a account?
            <span onClick={() => setcurrstate("Sign In")}> Login Here</span>
          </p>
        ) : (
          <p>
            Create a new Account?
            <span onClick={() => setcurrstate("Sign Up")}> Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
