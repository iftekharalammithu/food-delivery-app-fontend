import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Order your favourite food here</h1>
        <p>
          choose from a diverse menu featuring a dectable array of dishes
          crafted with the finest ingredients your cravings and elevate your
          dining experience, one delicious meal at a time
        </p>
        <button>view more</button>
      </div>
    </div>
  );
};

export default Header;
