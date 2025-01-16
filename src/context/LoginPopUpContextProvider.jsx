import React, {createContext, useContext, useEffect, useState} from "react";


const LoginPopUpContext = createContext()

export const LoginPopUpContextProvider = ({children}) => {
  const [loginPop, setLoginPop] = useState(false);


  return (
    <LoginPopUpContext.Provider value={{loginPop, setLoginPop}}>
      {children}
    </LoginPopUpContext.Provider>
  )
}

export function loginPopUpContext() {
  return useContext(LoginPopUpContext)
}
