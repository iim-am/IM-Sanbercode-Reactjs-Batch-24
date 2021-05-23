import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const User = { user: "admin", password: "admin" };
  const [Login, setLogin] = useState({ lists: User, token: "inValid" });

  return (
    <LoginContext.Provider value={[Login, setLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
