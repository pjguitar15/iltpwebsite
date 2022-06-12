import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UploadAgainModal = ({
  show,
  setShow,
  setSubmitLoading,
  addMorePhotos,
}) => {
  const navigate = useNavigate()
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Upload success! Do you want to add more photos?</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={addMorePhotos}>
            Add more photos
          </Button>
          <Button
            variant='secondary'
            onClick={() => {
              navigate('/admin/gallery')
              setSubmitLoading(false)
            }}
          >
            Go back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UploadAgainModal
