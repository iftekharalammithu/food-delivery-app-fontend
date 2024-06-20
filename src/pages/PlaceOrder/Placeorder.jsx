import React, { useContext, useEffect, useState } from "react";
import { Storecontext } from "../../Context/Storecontext";
import "./Placeorder.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Placeorder = () => {
  const { gettotalcartamount, token, food_list, cartitem, url } =
    useContext(Storecontext);

  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangehandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    let orderitems = [];
    food_list.map((item) => {
      if (cartitem[item._id] > 0) {
        let iteminfo = item;
        iteminfo["quantity"] = cartitem[item._id];
        orderitems.push(iteminfo);
      }
    });
    let orderdata = {
      address: data,
      items: orderitems,
      amount: gettotalcartamount() + 2,
    };
    let response = await axios.post(url + "api/order/place", orderdata, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Failed to place order");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (gettotalcartamount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">delivery information</p>
        <div className="multi-fields">
          <input
            required
            name="firstname"
            onChange={onchangehandeler}
            value={data.firstname}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onchangehandeler}
            value={data.lastname}
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onchangehandeler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          onChange={onchangehandeler}
          value={data.street}
          name="street"
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            onChange={onchangehandeler}
            value={data.city}
            name="city"
            type="text"
            placeholder="City"
          />
          <input
            required
            type="text"
            onChange={onchangehandeler}
            value={data.state}
            name="state"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            onChange={onchangehandeler}
            value={data.zipcode}
            name="zipcode"
            placeholder="Zip Code"
          />
          <input
            required
            type="text"
            placeholder="Country"
            onChange={onchangehandeler}
            value={data.country}
            name="country"
          />
        </div>
        <input
          required
          type="text"
          placeholder="Phone"
          onChange={onchangehandeler}
          value={data.phone}
          name="phone"
        />
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
          <button type="submit">Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
