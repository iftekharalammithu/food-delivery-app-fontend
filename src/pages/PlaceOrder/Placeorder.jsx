import React, { useContext } from "react";
import { Storecontext } from "../../Context/Storecontext";
import "./Placeorder.css";
const Placeorder = () => {
  const { gettotalcartamount } = useContext(Storecontext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
