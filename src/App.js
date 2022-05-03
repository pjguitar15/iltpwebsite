import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import MainHome from './components/HomeSections/MainHome'
import AboutUs from './components/AboutUs/AboutUs'
import News from './components/News/News'
import Fundraising from './components/Fundraising/Fundraising'

const App = () => {

  return (
    <div>
      <Router basename='/'>
        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<MainHome />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/news' element={<News />} />
          <Route path='/fundraising' element={<Fundraising />} />
        </Routes>
        <GetInTouch />
        <Footer />
      </Router>

    </div>
  )
}

export default App