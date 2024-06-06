import React from "react";
import { assets } from "../../frontend_assets/assets";
import "./Appdownload.css";
const Appdownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Exprience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Appdownload;
