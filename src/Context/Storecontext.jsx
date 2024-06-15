import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const [token, settoken] = useState("");
  const url = "http://localhost:4000/";
  const [food_list, setfoodlist] = useState([]);

  const addtocart = (itemID) => {
    if (!cartitem[itemID]) {
      setcartitem((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const fatchfoodlist = async () => {
    const response = await axios.get(url + "api/food/list");
    setfoodlist(response.data.data);
    console.log(response);
  };
  const removecartitem = (itemID) => {
    setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
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
