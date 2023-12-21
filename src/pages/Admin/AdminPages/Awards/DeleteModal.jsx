import React from "react"
import { Button, Modal } from "react-bootstrap"
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../../../../firebase/firebase-config"

const DeleteModal = ({
  show,
  handleClose,
  selectedId,
  firebaseData,
  setFirebaseData,
}) => {
  const deleteHandler = async (id) => {
    const userDoc = doc(db, "awards", id)
    await deleteDoc(userDoc)
    const filteredData = firebaseData.filter((item) => item.id !== id)
    setFirebaseData(filteredData)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Award</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You're about to delete this award. Are you sure you want to delete this?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleClose()
            deleteHandler(selectedId)
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
