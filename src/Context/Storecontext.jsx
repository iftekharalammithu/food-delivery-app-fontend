import { createContext, useState } from "react";
import { food_list } from "../frontend_assets/assets";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const [cartitem, setcartitem] = useState({});

  const addtocart = (itemID) => {
    if (!cartitem[itemID]) {
      setcartitem((prev) => ({ ...prev, [itemID]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const removecartitem = (itemID) => {
    setcartitem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    console.log(cartitem);
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitem[item];
      }
    }
    return totalamount;
  };

  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removecartitem,
    gettotalcartamount,
  };

  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
