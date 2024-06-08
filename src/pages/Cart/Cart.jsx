import React, { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../Context/Storecontext";

const Cart = () => {
  const { cartitem, food_list, removecartitem } = useContext(Storecontext);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price * cartitem[item._id]}</p>
                  <p onClick={() => removecartitem(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
