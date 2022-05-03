import React from 'react'

const AdminNav = ({
  handleDashboard,
  isDashboard,
  handleNewsPage,
  isNewsPage,
  handleTestimonies,
  isTestimonies,
  handleJumboImages,
  isJumboImages,
  handleLogout,
}) => {
  return (
    <div>
      <p className='text-muted'>Navigation</p>
      <div
        onClick={handleDashboard}
        className={`${
          isDashboard ? 'bg-white text-dark' : ''
        }m-0 py-3 admin-link`}
      >
        <h6 className={`${!isDashboard ? 'text-white' : ''} m-0`}>
          <i className='bi bi-speedometer me-2'></i>Dashboard
        </h6>
      </div>
      <div
        onClick={handleNewsPage}
        className={`${
          isNewsPage ? 'bg-white text-dark' : ''
        }m-0 py-3 admin-link`}
      >
        <h6 className={`${!isNewsPage ? 'text-white' : ''} m-0`}>
          <i className='bi bi-newspaper me-2'></i>News Page
        </h6>
      </div>
      <div
        onClick={handleTestimonies}
        className={`${
          isTestimonies ? 'bg-white text-dark' : ''
        }m-0 py-3 admin-link`}
      >
        <h6 className={`${!isTestimonies ? 'text-white' : ''} m-0`}>
          <i className='bi bi-person-lines-fill me-2'></i> Testimonies
        </h6>
      </div>
      <div
        onClick={handleJumboImages}
        className={`${
          isJumboImages ? 'bg-white text-dark' : ''
        }m-0 py-3 admin-link`}
      >
        <h6 className={`${!isJumboImages ? 'text-white' : ''} m-0`}>
          <i className='bi bi-blockquote-right me-2'></i>Jumbotron
        </h6>
      </div>
      <div onClick={handleLogout} className={`m-0 py-3 admin-link`}>
        <h6 className={`text-white m-0`}>
          <i className='bi bi-box-arrow-left me-2'></i>Logout
        </h6>
      </div>
    </div>
  )
}

export default AdminNav
