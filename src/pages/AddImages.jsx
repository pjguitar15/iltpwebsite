import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Spinner, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { db } from '../firebase/firebase-config'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
// image compression package
import imageCompression from 'browser-image-compression'
import UploadAgainModal from '../components/UploadAgainModal'
// pages

const AddVolunteerImages = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState('martin-luther-king-day')
  const [selectedYear, setSelectedYear] = useState('2018')
  const [show, setShow] = useState(false)

  const fileRef = useRef()
  const navigate = useNavigate()
  const collectionRef = collection(db, 'photos')

  // Add more photos handler
  const addMorePhotos = () => {
    setShow(false)
    setSelectedImage(null)
    setSubmitLoading(false)
    fileRef.current.value = null
  }

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitLoading(true)
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', selectedImage)
    formData.append('upload_preset', 'iltp-news-images')

    const cloudName = 'philcob'
    // POST REQUEST 1
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => {
        // POST REQUEST 2
        // http://res.cloudinary.com/philcob/image/upload/v1654299625/zsellrs9kdtcjryeihxz.jpg
        addDoc(collectionRef, {
          img: res.data.url,
          category: selectedAlbum,
          year: selectedYear,
          timestamp: serverTimestamp(),
        })
      })
      .then(() => {
        // Add React State Realtime Effect here
        setShow(true)
      })
      .catch((err) => {
        alert(err)
        setSubmitLoading(false)
      })
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin/gallery/add')
    } else {
      navigate('/admin')
    }
  }, [])

  return (
    <>
      <Container>
        <UploadAgainModal
          show={show}
          setShow={setShow}
          setSubmitLoading={setSubmitLoading}
          addMorePhotos={addMorePhotos}
        />
        <Form
          onSubmit={submitHandler}
          className='col-xl-8 mx-auto bg-light p-5 border mt-5'
        >
          <h1 className='display-6 my-3'>Add Images</h1>
          {/* Image */}
          <Form.Group className='my-2'>
            <Form.Text className='mb-1'>Upload an image</Form.Text>
            <Form.Control
              ref={fileRef}
              disabled={submitLoading}
              onChange={async (e) => {
                // const image = e.target.files[0]
                // this doesn't work
                // new Compressor(image, {
                //   quality: 0.1,
                //   success: (compressedResult) => {
                //     // compressedResult has the compressed file.
                //     // Use the compressed file to upload the images to your server.
                //     setSelectedImage(compressedResult)
                //   },
                // })
                // setSelectedImage(image)

                // try another method
                const imageFile = e.target.files[0]

                const options = {
                  maxSizeMB: 1,
                  maxWidthOrHeight: 1920,
                  useWebWorker: true,
                }
                try {
                  const compressedFile = await imageCompression(
                    imageFile,
                    options
                  )
                  setSelectedImage(compressedFile)
                } catch (error) {
                  console.log(error)
                }
              }}
              required
              type='file'
            />
          </Form.Group>

          {/* Select */}
          <Form.Group>
            <Form.Text>Which album does this photo belongs?</Form.Text>
            <Form.Select
              required
              onChange={(e) => setSelectedAlbum(e.target.value)}
            >
              <option value='martin-luther-king-day'>
                Martin Luther King Day
              </option>
              <option value='global-youth-service-day'>
                Global Youth Service Day
              </option>
              <option value='make-a-difference-day'>
                Make A Difference Day
              </option>
              <option value='others'>Others</option>
              <option value='winter-workshop'>Winter Workshop</option>
              <option value='spring-workshop'>Spring Workshop</option>
              <option value='summer-workshop'>Summer Workshop</option>
              <option value='fall-workshop'>Fall Workshop</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className='mt-2'>
            <Form.Text>Select Year</Form.Text>
            <Form.Select onChange={(e) => setSelectedYear(e.target.value)}>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
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
                onClick={() => navigate('/admin/gallery')}
              >
                Back
              </Button>
            </Form.Group>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default AddVolunteerImages
