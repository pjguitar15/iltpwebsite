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

const App = () => {

  return (
    <div>
      <Router basename='/'>

        <Routes>
          <Route path='/' element={<><NavbarComponent /><MainHome /></>} />
          <Route path='/about' element={<><NavbarComponent /><AboutUs /></>} />
          <Route path='/news' element={<><NavbarComponent /><News /></>} />
          <Route path='/news/:id' element={<><NavbarComponent /><NewsSlug /></>} />
          <Route path='/fundraising' element={<><NavbarComponent /><Fundraising /></>} />
          <Route path='/contact' element={<><NavbarComponent /><ContactUs /></>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <GetInTouch />
        <Footer />
      </Router>

    </div>
  )
}

export default App