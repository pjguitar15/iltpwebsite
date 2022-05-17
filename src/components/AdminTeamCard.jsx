import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AdminTeamCard = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className='col-xl-3'>
      <Card>
        <Card.Img src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Position: {item.position}</Card.Text>
          <Button
            onClick={() => navigate(`/admin/team/update/${item.id}`)}
            variant='warning'
            size='sm'
            className='me-1'
          >
            Update
          </Button>
          <Button variant='danger' size='sm'>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminTeamCard
