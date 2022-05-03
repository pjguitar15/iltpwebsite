import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import MainHome from './components/HomeSections/MainHome'
import AboutUs from './components/AboutUs/AboutUs'
import News from './components/News/News'
import Fundraising from './components/Fundraising/Fundraising'
import ContactUs from './components/ContactUs/ContactUs'
import NewsSlug from './components/News/NewsSlug'
import ErrorPage from './components/ErrorPage/ErrorPage'
import AdminLogin from './components/Admin/AdminLogin'
import AdminPage from './components/Admin/AdminPage'

const App = () => {

  return (
    <div>
      <Router basename='/'>

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
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </Router>

    </div>
  )
}

export default App