import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const [token, settoken] = useState("");
  const url = "http://localhost:4000/";
  const [food_list, setfoodlist] = useState([]);

  const addtocart = async (itemID) => {
    if (!cartitem[itemID]) {
      setcartitem((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "api/cart/addtocart",
        { itemID },
        { headers: { token } }
      );
    }
  };

  const fatchfoodlist = async () => {
    const response = await axios.get(url + "api/food/list");
    setfoodlist(response.data.data);
  };
  const removecartitem = async (itemID) => {
    setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    if (token) {
      await axios.post(
        url + "api/cart/removecart",
        { itemID },
        { headers: { token } }
      );
    }
  };

  const getcartdata = async (token) => {
    const response = await axios.post(
      url + "api/cart/getcart",
      {},
      { headers: { token } }
    );
    setcartitem(response.data.cartdata);
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitem[item];
      }
    }
    return totalamount;
  };

  useEffect(() => {
    async function loaddata() {
      await fatchfoodlist();
      if (localStorage.getItem("token")) {
        settoken(localStorage.getItem("token"));
        await getcartdata(localStorage.getItem("token"));
      }
    }
    loaddata();
  }, []);

  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removecartitem,
    gettotalcartamount,
    url,
    token,
    settoken,
  };

  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
