import React from 'react'

const OurTeamCard = ({ item }) => {
  return (
    <div
      data-aos='fade-down'
      data-aos-duration='1000'
      className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4'
    >
      <div style={{ height: '20rem' }}>
        <img
          alt='tests'
          className='w-100 h-100'
          style={{ objectFit: 'cover' }}
          src={item.img}
        />
      </div>
      <h6 className='mt-3'>{item.name}</h6>
      <div className='org-title'>{item.position}</div>
    </div>
  )
}

export default OurTeamCard
