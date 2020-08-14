import React from "react";
import AppContext from "./index";
import { useState } from "react";

const ContextProvider = ({ children }) => {

  const [state  , setState  ] = useState({modalIsOpen : false });

  const c = {
    state ,
    setState,
  };
  console.log("state in ContextProvider after update : " ,  c.state );

  return <AppContext.Provider value={c}>{children}</AppContext.Provider>;
};

export default ContextProvider;
