import React, { useState } from 'react'
import iltplogo from '../../assets/iltp-logo.png'
import AdminOurTeam from './AdminOurTeam'
import AdminNews from './AdminNews'
import AdminTestimonies from './AdminTestimonies'
import AdminJumbo from './AdminJumbo'
import AdminNav from './AdminNav'
import AdminAbout from './AdminAbout'

const AdminPage = ({ setIsLoggedIn }) => {
  const [isOurTeam, setIsOurTeam] = useState(true)
  const [isNewsPage, setIsNewsPage] = useState(false)
  const [isTestimonies, setIsTestimonies] = useState(false)
  const [isJumboImages, setIsJumboImages] = useState(false)
  const [isAboutPage, setIsAboutPage] = useState(false)

  const handleDashboard = () => {
    setIsOurTeam(true)
    setIsNewsPage(false)
    setIsTestimonies(false)
    setIsJumboImages(false)
    setIsAboutPage(false)
  }

  const handleNewsPage = () => {
    setIsOurTeam(false)
    setIsNewsPage(true)
    setIsTestimonies(false)
    setIsJumboImages(false)
    setIsAboutPage(false)
  }

  const handleTestimonies = () => {
    setIsOurTeam(false)
    setIsNewsPage(false)
    setIsTestimonies(true)
    setIsJumboImages(false)
    setIsAboutPage(false)
  }

  const handleJumboImages = () => {
    setIsOurTeam(false)
    setIsNewsPage(false)
    setIsTestimonies(false)
    setIsJumboImages(true)
    setIsAboutPage(false)
  }

  const handleAboutPage = () => {
    setIsOurTeam(false)
    setIsNewsPage(false)
    setIsTestimonies(false)
    setIsJumboImages(false)
    setIsAboutPage(true)
  }

  const handleLogout = () => {
    alert('Thank you admin!')
    setIsLoggedIn(false)
  }
  return (
    <div>
      {/* Dashboard */}
      <div className='row m-0' style={{ height: '100vh' }}>
        <div className='col-12 col-md-5 col-lg-3 bg-dark pt-4 text-center px-0'>
          <div className='col-2 mx-auto'>
            <img src={iltplogo} className='w-100' alt='iltp logo' />
          </div>
          <h5 className='mt-2 text-white'>ILTP Admin</h5>

          {/* Navigation */}
          <AdminNav
            handleDashboard={handleDashboard}
            isDashboard={isOurTeam}
            handleNewsPage={handleNewsPage}
            isNewsPage={isNewsPage}
            handleTestimonies={handleTestimonies}
            isTestimonies={isTestimonies}
            handleJumboImages={handleJumboImages}
            isJumboImages={isJumboImages}
            handleAboutPage={handleAboutPage}
            isAboutPage={isAboutPage}
            handleLogout={handleLogout}
          />
        </div>
        {/* col-10 p-5 */}
        {/* col-12 col-md-3 col-lg-2 */}
        <div className='col-12 col-md-7 col-lg-9 p-5'>
          {isOurTeam ? <AdminOurTeam /> : ''} {isNewsPage ? <AdminNews /> : ''}
          {isTestimonies ? <AdminTestimonies /> : ''}
          {isJumboImages ? <AdminJumbo /> : ''}
          {isAboutPage ? <AdminAbout /> : ''}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
