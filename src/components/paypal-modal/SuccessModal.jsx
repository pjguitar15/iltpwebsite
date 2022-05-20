import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SuccessModal = ({ show, setShow, donationAmount }) => {
  const navigate = useNavigate('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='opensans-thin'>
            Your ${donationAmount} donation has been sent successfuly to ILTP!
            Thank you very much!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false)
              navigate('/')
            }}
            variant='success'
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SuccessModal
