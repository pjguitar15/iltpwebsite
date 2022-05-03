import React, { useState } from 'react'
import iltplogo from '../../assets/iltp-logo.png'
import Dashboard from './Dashboard'
import AdminNews from './AdminNews'
import AdminTestimonies from './AdminTestimonies'
import AdminJumbo from './AdminJumbo'

const AdminPage = () => {
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
          <p className='text-muted'>Navigation</p>
          <div
            onClick={handleDashboard}
            className={`${
              isDashboard ? 'bg-white text-dark' : ''
            }m-0 py-3 admin-link`}
          >
            <h6 className={`${!isDashboard ? 'text-white' : ''} m-0`}>
              Dashboard
            </h6>
          </div>
          <div
            onClick={handleNewsPage}
            className={`${
              isNewsPage ? 'bg-white text-dark' : ''
            }m-0 py-3 admin-link`}
          >
            <h6 className={`${!isNewsPage ? 'text-white' : ''} m-0`}>
              News Page
            </h6>
          </div>
          <div
            onClick={handleTestimonies}
            className={`${
              isTestimonies ? 'bg-white text-dark' : ''
            }m-0 py-3 admin-link`}
          >
            <h6 className={`${!isTestimonies ? 'text-white' : ''} m-0`}>
              Testimonies
            </h6>
          </div>
          <div
            onClick={handleJumboImages}
            className={`${
              isJumboImages ? 'bg-white text-dark' : ''
            }m-0 py-3 admin-link`}
          >
            <h6 className={`${!isJumboImages ? 'text-white' : ''} m-0`}>
              Jumbotron Images
            </h6>
          </div>
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
