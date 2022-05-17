import React, { useState } from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap'
import { db } from '../firebase/firebase-config'
import { updateDoc, doc } from 'firebase/firestore'

const ConfirmJumbotronUpdate = ({
  show,
  setShow,
  jumbotronItem,
  title,
  content,
  setShowSuccessMessage,
}) => {
  const [updateLoading, setUpdateLoading] = useState(false)
  // update functionality here
  const updateHandler = async () => {
    setUpdateLoading(true)
    const userDoc = doc(db, 'jumbotron-section', jumbotronItem[0].id)
    const newFields = { title: title, content: content }
    await updateDoc(userDoc, newFields)
    setUpdateLoading(false)
    setShow(false)
    setShowSuccessMessage(true)
  }
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this testimony item?
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={updateLoading}
            size='sm'
            variant='warning'
            onClick={updateHandler}
          >
            {updateLoading ? (
              <Spinner size='sm' animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            ) : (
              'Update'
            )}
          </Button>
          <Button
            disabled={updateLoading}
            size='sm'
            variant='secondary'
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ConfirmJumbotronUpdate
