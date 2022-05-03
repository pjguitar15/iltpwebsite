import React, { useState } from 'react'
import iltplogo from '../../assets/iltp-logo.png'
import Dashboard from './Dashboard'
import AdminNews from './AdminNews'
import AdminTestimonies from './AdminTestimonies'
import AdminJumbo from './AdminJumbo'
import AdminNav from './AdminNav'

const AdminPage = ({ setIsLoggedIn }) => {
  const [isDashboard, setIsDashboard] = useState(true)
  const [isNewsPage, setIsNewsPage] = useState(false)
  const [isTestimonies, setIsTestimonies] = useState(false)
  const [isJumboImages, setIsJumboImages] = useState(false)

  const handleDashboard = () => {
    setIsDashboard(true)
    setIsNewsPage(false)
    setIsTestimonies(false)
    setIsJumboImages(false)
  }

  const handleNewsPage = () => {
    setIsDashboard(false)
    setIsNewsPage(true)
    setIsTestimonies(false)
    setIsJumboImages(false)
  }

  const handleTestimonies = () => {
    setIsDashboard(false)
    setIsNewsPage(false)
    setIsTestimonies(true)
    setIsJumboImages(false)
  }

  const handleJumboImages = () => {
    setIsDashboard(false)
    setIsNewsPage(false)
    setIsTestimonies(false)
    setIsJumboImages(true)
  }

  const handleLogout = () => {
    alert('Thank you admin!')
    setIsLoggedIn(false)
  }
  return (
    <div>
      {/* Dashboard */}
      <div className='row m-0' style={{ height: '100vh' }}>
        <div className='col-2 bg-dark pt-4 text-center px-0'>
          <div className='col-2 mx-auto'>
            <img src={iltplogo} className='w-100' alt='iltp logo' />
          </div>
          <h5 className='mt-2 text-white'>ILTP Admin</h5>

          {/* Navigation */}
          <AdminNav
            handleDashboard={handleDashboard}
            isDashboard={isDashboard}
            handleNewsPage={handleNewsPage}
            isNewsPage={isNewsPage}
            handleTestimonies={handleTestimonies}
            isTestimonies={isTestimonies}
            handleJumboImages={handleJumboImages}
            isJumboImages={isJumboImages}
            handleLogout={handleLogout}
          />
        </div>
        {/* col-10 p-5 */}
        <div className='col-10 p-5'>
          {isDashboard ? <Dashboard /> : ''} {isNewsPage ? <AdminNews /> : ''}
          {isTestimonies ? <AdminTestimonies /> : ''}
          {isJumboImages ? <AdminJumbo /> : ''}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
