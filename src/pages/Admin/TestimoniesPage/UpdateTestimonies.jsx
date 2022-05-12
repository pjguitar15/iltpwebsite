import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'
import { db } from '../../../firebase/firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'
const UpdateTestimonies = () => {
  const [currItem, setCurrItem] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  // fetch data from firebase
  const collectionRef = collection(db, 'testimonies')
  useEffect(() => {
    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      const allItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setCurrItem(allItems.filter((element) => element.id === id))
      console.log(currItem)
    }
    getUsers()
  }, [])
  useEffect(() => {
    console.log(currItem)
  }, [currItem])
  return (
    <div className='bg-dark'>
      <div
        className='bg-light p-5'
        style={{
          position: 'absolute',
          top: '50%',
          right: '50%',
          transform: 'translate(50%,-50%)',
        }}
      >
        <Container>
          <h4 className='text-center mb-4'>Update Testimony Item</h4>
          {/* Image */}
          {/* <div className='col-8 mx-auto'>
            <img className='w-100' src={currItem[0].img} alt='' />
          </div> */}
          {/* Form */}
          <Form className='col-8 mx-auto my-3'>
            <Form.Group>
              <Form.Label className='form-text'>Name</Form.Label>
              <Form.Control value={'Test 123'} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='form-text'>Batch</Form.Label>
              <Form.Control value={'Test 123'} />
            </Form.Group>
            <Form.Group>
              <Form.Label className='form-text'>Content</Form.Label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              />
              {/* <Form.Control type='textarea' value={'Test 123'} /> */}
            </Form.Group>
            <Form.Group>
              <Form.Label className='form-text'>Image</Form.Label>
              <Form.Control value={'Test 123'} />
            </Form.Group>
          </Form>
          {/* Button */}
          <div className='text-center'>
            <Button size='sm' variant='warning' className='col-8'>
              Update
            </Button>
          </div>
          <div className='text-center'>
            <Button
              variant='primary'
              className='col-8 mt-1'
              onClick={() => navigate('/adminpage')}
              size='sm'
            >
              Go Back
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default UpdateTestimonies
