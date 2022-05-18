import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase/firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'

const AdminTeamCard = ({ item, firebaseData, setFirebaseData }) => {
  const navigate = useNavigate()
  // delete handler
  const deleteHandler = async (id) => {
    const userDoc = doc(db, 'team', id)
    await deleteDoc(userDoc)

    // manually delete item from state
    setFirebaseData(firebaseData.filter((el) => el.id !== item.id))
    alert('Item successfully deleted')
  }
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
          <Button
            onClick={() => deleteHandler(item.id)}
            variant='danger'
            size='sm'
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminTeamCard
