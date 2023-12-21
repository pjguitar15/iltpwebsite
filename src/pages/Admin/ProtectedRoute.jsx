import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])
  return isLoggedIn ? <Outlet /> : <Navigate to='/admin' />
}

export default ProtectedRoute
