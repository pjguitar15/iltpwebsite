import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { db } from '../firebase/firebase-config'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
const AddVolunteerImages = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState()

  const navigate = useNavigate()
  const collectionRef = collection(db, 'volunteer-images')
  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitLoading(true)
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', selectedImage)
    formData.append('upload_preset', 'iltp-news-images')

    const cloudName = 'philcob'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => {
        addDoc(collectionRef, {
          img: res.data.url,
          timestamp: serverTimestamp(),
        })
      })
      .then(() => {
        // Add React State Realtime Effect here
        setSubmitLoading(false)
        alert('Uploaded Successfully')
        navigate('/admin/volunteers')
        setSubmitLoading(false)
      })
      .catch((err) => {
        alert(err)
        setSubmitLoading(false)
      })
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin/volunteers/add')
    } else {
      navigate('/admin')
    }
  }, [])
  return (
    <>
      <Container>
        <Form
          onSubmit={submitHandler}
          className='col-xl-8 mx-auto bg-light p-5 border mt-5'
        >
          <h1 className='display-6 my-3'>Add Images</h1>
          {/* Image */}
          <Form.Group className='my-2'>
            <label className='mb-1 text-muted'>Upload an image</label>
            <Form.Control
              disabled={submitLoading}
              onChange={(e) => setSelectedImage(e.target.files[0])}
              required
              type='file'
            />
          </Form.Group>
          <Form.Group className='mt-3'>
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
                'Add Image'
              )}
            </Button>
            <Button
              disabled={submitLoading}
              variant='primary'
              size='sm'
              onClick={() => navigate('/admin/volunteers')}
            >
              Back
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default AddVolunteerImages
