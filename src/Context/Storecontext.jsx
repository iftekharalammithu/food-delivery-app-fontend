import { createContext } from "react";

export const Storecontext = createContext(null);

const Storecontextprovider = (props) => {
  const contextvalue = {};
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default Storecontextprovider;
