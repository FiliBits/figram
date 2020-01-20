import React, { createContext, useState } from "react";
const Context = createContext();

const Provider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);

  // Esto va hacer el prop de Provider, es lo que vamos a poder acceder en toda la app
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
};