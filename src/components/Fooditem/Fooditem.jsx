import React, { useContext, useState } from "react";
import "./Fooditem.css";
import { assets } from "../../frontend_assets/assets";
import { Storecontext } from "../../Context/Storecontext";

const Fooditem = ({ id, name, description, image, price }) => {
  const [itemcount, setitemcount] = useState(0);

  const { cartitem, addtocart, removecartitem, url } = useContext(Storecontext);

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img src={url + "image/" + image} alt="" className="food-item-image" />
        {!cartitem[id] ? (
          <img
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt=""
            className="add"
          />
        ) : (
          <div className="food-add-counter">
            <img
              onClick={() => removecartitem(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartitem[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
