import React from 'react'

const ObjectivesCard = ({ item, textCenterOnImg, bottomBorder }) => {
  return (
    <div
      data-aos='flip-up'
      data-aos-duration='1000'
      className='col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3 mx-auto mb-4 px-2'
    >
      <div className=' position-relative p-0'>
        <img
          className='w-100'
          style={{ position: 'relative' }}
          src={item.card}
          alt='promoteCard'
        />
        <div style={textCenterOnImg} className='text-center text-white p-0'>
          <h4 className='m-0 pb-2 px-2' style={bottomBorder}>
            {item.title}
          </h4>
          <p
            className='mt-4'
            style={{
              fontWeight: '500',
              fontSize: '20px',
              width: '250px',
            }}
          >
            {item.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ObjectivesCard
