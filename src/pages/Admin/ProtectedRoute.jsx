import React from 'react'
import { Navigate, Outlet } from 'react-router'

// const useAuth = ({ isLoggedin }) => {
//   const user = { loggedIn: isLoggedin }
//   return user && user.loggedIn
// }

const ProtectedRoute = ({ isLoggedin }) => {
  // const isAuth = useAuth()
  return isLoggedin ? <Outlet /> : <Navigate to='/admin' />
}

export default ProtectedRoute
