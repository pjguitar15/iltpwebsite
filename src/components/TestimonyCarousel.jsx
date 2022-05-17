import React from 'react'
import { Carousel } from 'react-bootstrap'
// Loading Card
import LoadingCard from './LoadingCard'

const TestimonyCarousel = ({ index, handleSelect, loading, testimonyData }) => {
  return (
    <Carousel
      variant='dark'
      className='pb-5'
      activeIndex={index}
      onSelect={handleSelect}
    >
      {loading ? (
        <LoadingCard />
      ) : (
        testimonyData.map((item, index) => (
          <Carousel.Item interval={1500} key={index}>
            <p className='lead col-md-10 mx-auto col-lg-9 mb-4'>
              "{item.content}"
            </p>
            <div className='col-2 mx-auto my-2'>
              <img
                style={{
                  borderRadius: '50%',
                  height: '100px',
                  width: '100px',
                }}
                src={item.img}
                alt=''
              />
            </div>
            <div className='testimony-person mt-4 bg-light mx-auto'>
              <div className='m-0 bg-success text-white bebas'>{item.name}</div>
              <p className='m-0 py-2 bg-light'>Batch {item.batchYear}</p>
            </div>
          </Carousel.Item>
        ))
      )}
    </Carousel>
  )
}

export default TestimonyCarousel
