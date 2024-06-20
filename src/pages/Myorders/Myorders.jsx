import React, { useContext, useEffect, useState } from "react";
import "./Myorders.css";
import { Storecontext } from "../../Context/Storecontext";
import axios from "axios";
import { assets } from "../../frontend_assets/assets";

const Myorders = () => {
  const { url, token } = useContext(Storecontext);
  const [data, setdata] = useState([]);

  const fetchorders = async () => {
    const response = await axios.post(
      url + "api/order/userorder",
      {},
      { headers: { token } }
    );
    setdata(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchorders();
    }
  }, [token]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-order-orders">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "*" + item.quantity;
                  } else {
                    return item.name + "*" + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items : {order.items.length}</p>
              <p>
                <span className="point">&#x25cf;</span>
                <b className="order-status">{order.status}</b>
              </p>
              <button className="button">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorders;
