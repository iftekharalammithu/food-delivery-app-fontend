import React, { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitem, food_list, removecartitem, gettotalcartamount, url } =
    useContext(Storecontext);
  const ordernavigate = useNavigate();
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
                  <img src={url + "image/" + item.image} alt="" />
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
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalcartamount() > 0 ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamount() > 0 ? gettotalcartamount() + 2 : 0}</b>
            </div>
          </div>
          <button onClick={() => ordernavigate("/order")}>
            Proceed To ChackOut
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
