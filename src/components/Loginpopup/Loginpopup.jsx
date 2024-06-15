import React, { useContext, useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../frontend_assets/assets";
import { Storecontext } from "../../Context/Storecontext";
import axios from "axios";

const Loginpopup = ({ setshowlogin }) => {
  const { url, token, settoken } = useContext(Storecontext);
  const [currstate, setcurrstate] = useState("Sign In");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangehandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata({ ...data, [name]: value });
  };

  const onlogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if (currstate === "Sign In") {
      newurl += "api/user/login";
    } else {
      newurl += "api/user/regester";
    }

    const response = await axios.post(newurl, data);
    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowlogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onlogin} className="login-popup-container">
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
            <input
              name="name"
              onChange={onchangehandle}
              type="text"
              value={data.name}
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={data.email}
            onChange={onchangehandle}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            value={data.password}
            onChange={onchangehandle}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currstate === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        {currstate === "Sign Up" ? (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I Agree to the terms of use & Privacy Policy</p>
          </div>
        ) : (
          <></>
        )}
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
