import React, { useEffect, useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"

const AdminNewsCard = ({ item, openModal, deleteHandler }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="p-2 col-12 col-lg-6 col-xl-4">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setShow(false)
              deleteHandler(item.id)
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Img
          style={{ height: "100px", objectFit: "cover" }}
          variant="top"
          src={item.img}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content.slice(0, 100)}...</Card.Text>
          <Button
            onClick={() =>
              openModal(
                item.id,
                item.title,
                item.img,
                item.content,
                item.date,
                item.location,
                item.multipleImages,
                item.secondaryContent
              )
            }
            variant="warning me-1 btn-sm"
          >
            Update
          </Button>
          <Button onClick={() => setShow(true)} variant="danger btn-sm">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminNewsCard
