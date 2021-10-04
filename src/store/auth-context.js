import React, { createContext, useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //state is managed by the backedn auth functions
  const loginHandler = (email, password) => {
    //Here we would usually do some backend authentication validation
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };
  useEffect(() => {
    const userLoginInformation = localStorage.getItem("isLoggedIn");
    if (userLoginInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    //here we would again do some backend logout validation
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
