import React, { useState, useEffect, useContext } from 'react'
// all firebase imports here
// import { auth } from '../firebase/firebase-config'
// auth imports
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const auth = getAuth()

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (crediential) => {
        console.log('User created: ', crediential.user)
      }
    )
  }

  function logout() {
    signOut(auth)
      .then(() => {
        console.log('user signed out')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  const value = {
    currentUser,
    login,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
