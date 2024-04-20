/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
 import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth'
import app from '../../Firebase/firebase.congif'
 

export const AuthContext=createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
    // login from connect kora hoise
      const signIn=(email, password)=>{
       return signInWithEmailAndPassword(auth ,email,password)
      } 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser)
    });
    return ()=>[
       unsubscribe()
    ]
  
  }, [])
  
    const authInfo = () => {
      user,
      loading,
        createUser,
        signIn
     }
   return (
       <AuthContext.Provider value={authInfo}> 
           {children}
       </AuthContext.Provider>
   ) 
 }
 
export default AuthProvider;