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
import MessageOnTop from './pages/HomeSections/MessageOnTop'
import ProtectedRoute from './pages/Admin/ProtectedRoute'

// admin pages
import AdminNewsPage from './pages/Admin/AdminPages/AdminNewsPage'
import AdminTestimonyPage from './pages/Admin/AdminPages/AdminTestimonyPage'
import AdminJumbotronPage from './pages/Admin/AdminPages/AdminJumbotronPage'
import UpdateTestimonies from './pages/Admin/TestimoniesPage/UpdateTestimonies'
import AddTestimony from './pages/Admin/TestimoniesPage/AddTestimony'
import AdminAboutPage from './pages/Admin/AdminPages/AdminAboutPage'
import AddTeamMemberForm from './components/AddTeamMemberForm'
import AdminTeamPage from './pages/Admin/AdminPages/AdminTeamPage'
import AdminUpdateTeam from './pages/Admin/AdminUpdateTeam'

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
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/admin/news' element={<AdminNewsPage setIsLoggedIn={setIsLoggedIn} />} />
          {/* adminpage/testimonies */}
          <Route path='/admin/testimonies' element={<AdminTestimonyPage setIsLoggedIn={setIsLoggedIn} />} />
          {/* adminpage/jumbotron */}
          <Route path='/admin/jumbotron' element={<AdminJumbotronPage setIsLoggedIn={setIsLoggedIn} />} />
          {/* adminpage/about */}
          {/* <Route path='/admin/about' element={<AdminAboutPage setIsLoggedIn={setIsLoggedIn} />} /> */}
          {/* adminpage/our-team */}
          <Route path='/admin/team' element={<AdminTeamPage setIsLoggedIn={setIsLoggedIn} />} />

          {/* Add Testimony Route */}
          <Route path='/admin/add-testimony' element={<AddTestimony />} />
          <Route path='/admin/testimonies/:id' element={<UpdateTestimonies setIsLoggedIn={setIsLoggedIn} />} />

          {/* Add Team Member Route */}
          <Route path='/admin/team/add' element={<AddTeamMemberForm />} />
          <Route path='/admin/team/update/:id' element={<AdminUpdateTeam />} />
          {/* </Route> */}

        </Routes>
      </Router>

    </div>
  )
}

export default App