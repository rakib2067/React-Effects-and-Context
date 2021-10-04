import React, { useContext, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useEffect } from "react/cjs/react.development";
import AuthContext from "./store/auth-context";

function App() {
  const context = useContext(AuthContext);
  /*const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
}); */
  return (
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
