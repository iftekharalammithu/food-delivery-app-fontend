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

  const contextvalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removecartitem,
  };

  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
