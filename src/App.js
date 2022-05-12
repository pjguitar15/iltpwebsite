import React, { useState } from 'react'
import NavbarComponent from './pages/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetInTouch from './pages/GetInTouch'
import Footer from './pages/Footer'
import MainHome from './pages/HomeSections/MainHome'
import AboutUs from './pages/AboutUs/AboutUs'
import News from './pages/News/News'
import Fundraising from './pages/Fundraising/Fundraising'
import ContactUs from './pages/ContactUs/ContactUs'
import NewsSlug from './pages/News/NewsSlug'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminPage from './pages/Admin/AdminPage'
import MessageOnTop from './pages/HomeSections/MessageOnTop'
import ProtectedRoute from './pages/Admin/ProtectedRoute'


// useAuth
//  export const useAuth = () => {
//   const user = { loggedIn: isLoggedin }
//   return user && user.loggedIn
// }

const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<><NavbarComponent /><MainHome /><GetInTouch />
            <Footer /></>} />
          <Route path='/about' element={<><NavbarComponent /><AboutUs /><GetInTouch />
            <Footer /></>} />
          <Route path='/news' element={<><NavbarComponent /><News /><GetInTouch />
            <Footer /></>} />
          <Route path='/news/:id' element={<><NavbarComponent /><NewsSlug /><GetInTouch />
            <Footer /></>} />
          <Route path='/fundraising' element={<><NavbarComponent /><Fundraising /><GetInTouch />
            <Footer /></>} />
          <Route path='/contact' element={<><NavbarComponent /><ContactUs /><GetInTouch />
            <Footer /></>} />
          <Route path='/admin' element={<AdminLogin setIsLoggedIn={setIsLoggedIn} isLoggedin={isLoggedin} setUser={setUser} user={user} password={password} setPassword={setPassword} />} />

          {/* <Route path='/adminpage' element={<AdminPage />} /> */}
          <Route path='*' element={<ErrorPage />} />

          {/* Protected Route */}
          <Route element={<ProtectedRoute test={true} isLoggedin={isLoggedin} />}>
            <Route path='/adminpage' element={<AdminPage setIsLoggedIn={setIsLoggedIn} />} />
          </Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App