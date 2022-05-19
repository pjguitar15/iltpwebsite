import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// Firebase imports
import { db } from '../firebase/firebase-config'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import Axios from 'axios'

const AddTeamMemberForm = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const [nameInput, setNameInput] = useState('')
  const [positionInput, setPositionInput] = useState('')
  const navigate = useNavigate()
  const collectionRef = collection(db, 'team')
  // Add data to firebase
  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    // upload image
    const formData = new FormData()
    formData.append('file', selectedImage)
    formData.append('upload_preset', 'iltp-news-images')

    Axios.post(`https://api.cloudinary.com/v1_1/philcob/image/upload`, formData)
      .then((res) => {
        addDoc(collectionRef, {
          name: nameInput,
          position: positionInput,
          img: res.data.url,
          show: true,
          timestamp: serverTimestamp(),
        })
      })
      .then(() => {
        // Add React State Realtime Effect here
        setSubmitLoading(false)
        alert('Submitted Successfuly!')
        navigate('/admin/team')

        // set to emptry string onSubmit
        setNameInput('')
        setPositionInput('')
        setSelectedImage()
      })
      .catch((err) => {
        alert(err)
      })
  }
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin/team/add')
    } else {
      navigate('/admin')
    }
  }, [])
  return (
    <Container>
      <Form
        onSubmit={submitHandler}
        className='col-xl-8 mx-auto bg-light p-5 border mt-5'
      >
        <h1 className='display-3 my-3'>Add a Team Member</h1>
        {/* Name */}
        <Form.Group className='my-2'>
          <Form.Control
            disabled={submitLoading}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
            type='text'
            placeholder={`Member name`}
          />
        </Form.Group>
        {/* Position Input */}
        <Form.Group className='my-2'>
          <Form.Control
            disabled={submitLoading}
            value={positionInput}
            onChange={(e) => setPositionInput(e.target.value)}
            required
            type='text'
            placeholder='Member position'
          />
        </Form.Group>
        {/* Image */}
        <Form.Group className='my-2'>
          <label className='mb-1 text-muted'>
            Upload the ILTP member's image
          </label>
          <Form.Control
            disabled={submitLoading}
            onChange={(e) => setSelectedImage(e.target.files[0])}
            required
            type='file'
          />
        </Form.Group>
        <Form.Group>
          <Button
            size='sm'
            variant='warning'
            className='me-1'
            disabled={submitLoading}
            type='submit'
          >
            {submitLoading ? (
              <>
                <Spinner animation='border' variant='light me-2' size='sm' />
                Loading please wait...
              </>
            ) : (
              'Submit'
            )}
          </Button>
          <Button
            disabled={submitLoading}
            variant='primary'
            size='sm'
            onClick={() => navigate('/admin/team')}
          >
            Back
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default AddTeamMemberForm
