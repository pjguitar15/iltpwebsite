import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import ConfirmModal from '../../../components/ConfirmModal'

const TestimonyCard = ({ item }) => {
  // Modal State
  const [show, setShow] = useState(false)
  // Delete loading state
  const [deleteLoading, setDeleteLoading] = useState(false)
  let navigate = useNavigate()
  const handleShow = () => setShow(true)

  return (
    <div className='col-sm-6 col-lg-6 col-xl-3 my-4 p-2'>
      <ConfirmModal
        deleteLoading={deleteLoading}
        setDeleteLoading={setDeleteLoading}
        item={item}
        show={show}
        setShow={setShow}
        handleShow={handleShow}
      />
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
          <Button onClick={handleShow} size='sm' variant='danger'>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TestimonyCard
