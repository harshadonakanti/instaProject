import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <authContext.Provider value={{user, setUser, loading, setLoading}}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
