import React from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap'
import { db } from '../firebase/firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const ConfirmModal = ({
  firebaseData,
  setFirebaseData,
  show,
  setShow,
  deleteLoading,
  setDeleteLoading,
  item,
}) => {
  let navigate = useNavigate()
  const handleClose = () => setShow(false)
  // Delete handler
  const deleteHandler = async () => {
    setDeleteLoading(true)
    const userDoc = doc(db, 'testimonies', item.id)
    await deleteDoc(userDoc)
    setDeleteLoading(false)
    setShow(false)
    // Remove item from state to simulate realtime deletion
    setFirebaseData(firebaseData.filter((element) => element.id !== item.id))

    navigate('/admin/testimonies')
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this testimony item?
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={deleteLoading}
            size='sm'
            variant='danger'
            onClick={deleteHandler}
          >
            {deleteLoading ? (
              <Spinner size='sm' animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            ) : (
              'Delete'
            )}
          </Button>
          <Button size='sm' variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ConfirmModal
