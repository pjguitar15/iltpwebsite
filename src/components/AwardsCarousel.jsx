import React from 'react'
import { Carousel } from 'react-bootstrap'

const AwardsCarousel = ({ index, handleSelect, certificates }) => {
  return (
    <Carousel
      variant='dark'
      data-aos='fade-down'
      data-aos-duration='1000'
      className='text-light m-0 d-flex align-items-center justify-content-center flex-column'
      activeIndex={index}
      onSelect={handleSelect}
      pause='false'
    >
      {certificates.map((item, index) => (
        <Carousel.Item key={index} interval={6000} className='px-5'>
          <div className='row px-5 py-5 container mx-auto'>
            <div className='col-md-6 col-lg-4 mx-auto mb-3'>
              <img className='w-100 shadow' src={item.cert1} alt='cert' />
            </div>
            <div className='col-md-6 col-lg-4 mx-auto mb-3'>
              <img className='w-100 shadow' src={item.cert2} alt='cert' />
            </div>
            <div className='col-md-6 col-lg-4 mx-auto mb-3'>
              <img className='w-100 shadow' src={item.cert3} alt='cert' />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default AwardsCarousel
