import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { loginPopUpContext } from "./LoginPopUpContextProvider"


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})
  const { setLoginPop } = loginPopUpContext()

  function signUp() {
    return signInWithPopup(auth, provider)
  }

  function logOut() {
    return signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(!currentUser) {
        setLoginPop(true)
      }
      setUser(currentUser)
    })
  }, [])

  return (
    <AuthContext.Provider value={{user, signUp, logOut}}>
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth(){
  return useContext(AuthContext)
}


