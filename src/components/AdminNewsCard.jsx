import React from 'react'
import { Button, Card } from 'react-bootstrap'

const AdminNewsCard = ({ item, openModal, deleteHandler }) => {
  return (
    <div className='p-2 col-12 col-lg-6 col-xl-4'>
      <Card>
        <Card.Img
          style={{ height: '100px', objectFit: 'cover' }}
          variant='top'
          src={item.img}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content.slice(0, 100)}...</Card.Text>
          <Button
            onClick={() =>
              openModal(item.id, item.title, item.img, item.content, item.date)
            }
            variant='warning me-1 btn-sm'
          >
            Update
          </Button>
          <Button
            onClick={() => deleteHandler(item.id)}
            variant='danger btn-sm'
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminNewsCard
