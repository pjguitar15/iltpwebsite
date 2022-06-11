import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PaymentSuccessModal = ({ showSuccessModal, setShowSuccessModal }) => {
  const navigate = useNavigate()
  return (
    <div>
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, your purchase was successful! 😁 Your receipt has been sent to
          your email.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => {
              setShowSuccessModal(false)
              navigate('/fundraising')
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PaymentSuccessModal
