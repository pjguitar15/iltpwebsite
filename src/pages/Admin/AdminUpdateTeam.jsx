import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
// Firebase import
import { db } from '../../firebase/firebase-config'
import { collection, query, getDocs, doc, updateDoc } from 'firebase/firestore'

const AdminUpdateTeam = () => {
  const [currItem, setCurrItem] = useState([{}])
  const navigate = useNavigate()
  const { id } = useParams()
  const updateHandler = async (e) => {
    e.preventDefault()
    const userDoc = doc(db, 'team', id)
    const newFields = { name: currItem[0].name, position: currItem[0].position }
    await updateDoc(userDoc, newFields)
    alert('Item updated')
    navigate('/admin/team')
  }

  // useEffect to target the id and put it inside a state
  useEffect(() => {
    const collectionRef = collection(db, 'team')
    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      const dataItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const filtered = dataItems.filter((el) => el.id === id)
      setCurrItem(filtered)
    }
    getUsers()
  }, [])

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate(`/admin/team/update/${id}`)
    } else {
      navigate('/admin')
    }
  }, [])

  return (
    <div className='bg-light mt-5 col-xl-10 mx-auto p-5 border'>
      <h4 className='text-center mb-5 display-4'>Update Item</h4>
      <Form onSubmit={updateHandler} className='col-xl-6 mx-auto my-3'>
        {/* Image */}
        <div className='col-3'>
          <img className='w-100 rounded' src={currItem[0].img} alt='' />
        </div>
        <Form.Group className='mb-1'>
          <Form.Label className='form-text'>Name</Form.Label>
          <Form.Control
            value={currItem[0].name}
            onChange={(e) =>
              setCurrItem([{ ...currItem[0], name: e.target.value }])
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='form-text'>Position</Form.Label>
          <Form.Control
            value={currItem[0].position}
            onChange={(e) =>
              setCurrItem([{ ...currItem[0], position: e.target.value }])
            }
          />
        </Form.Group>
        {/* Button */}
        <div className='text-center mx-auto mt-2'>
          <Button type='submit' size='sm' variant='warning' className='col-12'>
            Update
          </Button>
        </div>
        <div className='text-center mx-auto'>
          <Button
            variant='primary'
            className='col-12 mt-1'
            onClick={() => navigate('/admin/team')}
            size='sm'
          >
            Go Back
          </Button>
        </div>
      </Form>

      {/* To add image feature, need to pay more */}
      {/* <Form.Group>
        <Form.Label className='form-text'>Image</Form.Label>
        <Form.Control value={'Test 123'} />
      </Form.Group> */}
    </div>
  )
}

export default AdminUpdateTeam
