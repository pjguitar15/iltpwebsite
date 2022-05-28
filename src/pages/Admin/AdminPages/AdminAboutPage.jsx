import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminNav from '../AdminNav'
import AdminAbout from '../AdminAbout'

const AdminNewsPage = () => {
  // useLocation
  const location = useLocation()
  // remove all the boolean state and change the active base on the url

  return (
    <div>
      {/* Dashboard */}
      <div className='row m-0' style={{ height: '100vh' }}>
        <div className='col-12 col-md-5 col-lg-3 bg-dark pt-4 text-center px-0'>
          {/* Navigation */}
          <AdminNav location={location} />
        </div>
        <div className='col-12 col-md-7 col-lg-9 p-5'>
          {location.pathname.slice(7) === 'about' ? <AdminAbout /> : ''}
        </div>
      </div>
    </div>
  )
}

export default AdminNewsPage
