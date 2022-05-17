import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNav = ({ iltplogo, handleLogout, location }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='col-2 mx-auto'>
        <img src={iltplogo} className='w-100' alt='iltp logo' />
      </div>
      <h5 className='mt-2 text-white'>ILTP Admin</h5>
      <p className='text-muted'>Navigation</p>

      <div
        onClick={() => navigate('/admin/news')}
        className={`${
          location.pathname.slice(7) === 'news'
            ? 'bg-light text-dark'
            : 'text-light'
        } m-0 py-3 admin-link`}
      >
        <h6 className={`m-0`}>
          <i className='bi bi-newspaper me-2'></i>News Page
        </h6>
      </div>

      <div
        onClick={() => navigate('/admin/testimonies')}
        className={`${
          location.pathname.slice(7) === 'testimonies'
            ? 'bg-light text-dark'
            : 'text-light'
        } m-0 py-3 admin-link`}
      >
        <h6 className={`m-0`}>
          <i className='bi bi-person-lines-fill me-2'></i> Testimonies
        </h6>
      </div>
      <div
        onClick={() => navigate('/admin/jumbotron')}
        className={`${
          location.pathname.slice(7) === 'jumbotron'
            ? 'bg-light text-dark'
            : 'text-light'
        } m-0 text-light py-3 admin-link`}
      >
        <h6 className={`m-0`}>
          <i className='bi bi-blockquote-right me-2'></i>Jumbotron
        </h6>
      </div>
      <div
        onClick={() => navigate('/admin/about')}
        className={`${
          location.pathname.slice(7) === 'about'
            ? 'bg-light text-dark'
            : 'text-light'
        } m-0 text-light py-3 admin-link`}
      >
        <h6 className={`m-0`}>
          <i className='bi bi-blockquote-right me-2'></i>About page
        </h6>
      </div>
      <div
        onClick={() => navigate('/admin/team')}
        className={`${
          location.pathname.slice(7) === 'team'
            ? 'bg-light text-dark'
            : 'text-light'
        } m-0 text-light py-3 admin-link`}
      >
        <h6 className={`m-0`}>
          <i className='bi bi-speedometer me-2'></i>Our Team
        </h6>
      </div>
      <div onClick={handleLogout} className={`m-0 text-light py-3 admin-link`}>
        <h6 className={`text-white m-0`}>
          <i className='bi bi-box-arrow-left me-2'></i>Logout
        </h6>
      </div>
    </div>
  )
}

export default AdminNav
