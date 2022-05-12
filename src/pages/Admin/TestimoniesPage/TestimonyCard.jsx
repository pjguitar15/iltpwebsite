import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const TestimonyCard = ({ item }) => {
  let navigate = useNavigate()

  //   Navigate and take id
  return (
    <div className='col-sm-6 col-lg-6 col-xl-3 my-4 p-2'>
      <div className='border'>
        <div
          className='testimony-image col-12 mx-auto'
          style={{ height: '10rem' }}
        >
          <img
            style={{ objectFit: 'cover' }}
            className='w-100 h-100'
            src={item.img}
            alt='profile'
          />
        </div>
        <div className='testimony-card-body p-3'>
          <h6>Name: {item.name}</h6>
          <h6>Batch: {item.batchYear}</h6>
          <p>{item.content.slice(0, 20)}...</p>
          <Button
            onClick={() => navigate(`/adminpage/testimonies/${item.id}`)}
            size='sm'
            variant='warning me-2'
          >
            Update
          </Button>
          <Button size='sm' variant='danger'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TestimonyCard
