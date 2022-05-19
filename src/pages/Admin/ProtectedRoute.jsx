import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      console.log('log in set to true')
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      console.log('log in set to false')
    }
  }, [])
  return isLoggedIn ? <Outlet /> : <Navigate to='/admin' />
}

export default ProtectedRoute
