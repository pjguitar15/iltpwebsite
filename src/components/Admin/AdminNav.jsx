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
        <h6 className={`${!isDashboard ? 'text-white' : ''} m-0`}>Dashboard</h6>
      </div>
      <div
        onClick={handleNewsPage}
        className={`${
          isNewsPage ? 'bg-white text-dark' : ''
        }m-0 py-3 admin-link`}
      >
        <h6 className={`${!isNewsPage ? 'text-white' : ''} m-0`}>News Page</h6>
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
  )
}

export default AdminNav
