import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminJumbo from '../AdminJumbo'
import AdminNav from '../AdminNav'

const AdminJumbotronPage = () => {
  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()
  // remove all the boolean state and change the active base on the url

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin/jumbotron')
    } else {
      navigate('/admin')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {/* Dashboard */}
      <div className='row m-0' style={{ height: '100vh' }}>
        <div className='col-12 col-md-5 col-lg-3 bg-dark pt-4 text-center px-0'>
          {/* Navigation */}
          <AdminNav location={location} />
        </div>
        <div className='col-12 col-md-7 col-lg-9 p-5'>
          {location.pathname.slice(7) === 'jumbotron' ? <AdminJumbo /> : ''}
        </div>
      </div>
    </div>
  )
}

export default AdminJumbotronPage
