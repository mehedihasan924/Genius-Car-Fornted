/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import app from '../../Firebase/firebase.congif'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
// Email Loguin  
  const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
      }
// user Ase kina Check  
  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    }
  }, [])
  
    const authInfo = () => {
       user,
        loading,
        createUser
    }
  return (
      <AuthContext.Provider value={authInfo}>
        {children}  
     </AuthContext.Provider>
  )
}

export default AuthProvider