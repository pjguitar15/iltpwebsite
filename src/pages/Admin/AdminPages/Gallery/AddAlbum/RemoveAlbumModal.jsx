import React from "react"
import { Button, Modal } from "react-bootstrap"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../../../../firebase/firebase-config"

const RemoveAlbumModal = ({
  show,
  handleClose,
  selectedId,
  albums,
  setAlbums,
}) => {
  const deleteHandler = async (id) => {
    const userDoc = doc(db, "albums", id)
    await deleteDoc(userDoc)
    const filteredData = albums.filter((item) => item.id !== id)
    setAlbums(filteredData)
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

export default RemoveAlbumModal
