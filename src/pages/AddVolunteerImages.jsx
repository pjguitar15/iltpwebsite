import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { db } from '../firebase/firebase-config'
import {
  addDoc,
  serverTimestamp,
  collection,
  getDocs,
  query,
} from 'firebase/firestore'
// pages
import AddNewAlbumForm from './AddNewAlbumForm'

const AddVolunteerImages = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const [albumNames, setAlbumNames] = useState([])
  const [isAddNewAlbumSelected, setIsAddNewAlbumSelected] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState('')

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
          album: selectedAlbum,
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

  useEffect(() => {
    const collectionRef = collection(db, 'volunteer-albums')
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setAlbumNames(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  useEffect(() => {
    const slicedAlbum = albumNames.slice(0, 1).map((item) => item.name)
    setSelectedAlbum(slicedAlbum[0])
  }, [albumNames])
  return (
    <>
      {isAddNewAlbumSelected ? (
        <AddNewAlbumForm
          setAddNewAlbumSelected={setIsAddNewAlbumSelected}
          albumNames={albumNames}
          setAlbumNames={setAlbumNames}
        />
      ) : (
        <Container>
          <Form
            onSubmit={submitHandler}
            className='col-xl-8 mx-auto bg-light p-5 border mt-5'
          >
            <h1 className='display-6 my-3'>Add Images</h1>
            {/* Image */}
            <Form.Group className='my-2'>
              <Form.Text className='mb-1'>Upload an image</Form.Text>
              <Form.Control
                disabled={submitLoading}
                onChange={(e) => setSelectedImage(e.target.files[0])}
                required
                type='file'
              />
            </Form.Group>

            {/* Select */}
            <Form.Group>
              <Form.Text>Which album does this photo belongs?</Form.Text>
              <Form.Select onChange={(e) => setSelectedAlbum(e.target.value)}>
                {albumNames.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Buttons */}
            <div className='d-flex justify-content-between'>
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
                      <Spinner
                        animation='border'
                        variant='light me-2'
                        size='sm'
                      />
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
              <Form.Group className='mt-3'>
                <Button
                  disabled={submitLoading}
                  variant='primary'
                  size='sm'
                  onClick={() => setIsAddNewAlbumSelected(true)}
                >
                  Add a new album
                </Button>
              </Form.Group>
            </div>
          </Form>
        </Container>
      )}
    </>
  )
}

export default AddVolunteerImages
