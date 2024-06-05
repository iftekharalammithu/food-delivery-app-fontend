import { createContext } from "react";
import { food_list } from "../frontend_assets/assets";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const contextvalue = { food_list };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
