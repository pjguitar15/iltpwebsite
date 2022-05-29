import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
// firebase imports
import { db } from '../../../firebase/firebase-config'
import { updateDoc, doc } from 'firebase/firestore'
import Axios from 'axios'

const NewsPageModal = ({
  updateModalShow,
  setUpdateModalShow,
  currentItem,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [selectedImage, setSelectedImage] = useState([])
  const [selectedImageUrl, setSelectedImageUrl] = useState('')
  useEffect(() => {
    setLocationInput(currentItem.location)
    setDate(currentItem.date)
    setTitle(currentItem.title)
    setContent(currentItem.content)
    setImageUrl(currentItem.img)
  }, [currentItem])

  // Firebase update here
  const updateItem = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (selectedImage.name) {
      // how to use axios. this is inside uploadImage function
      const formData = new FormData()
      formData.append('file', selectedImage) // selectedImage is a state
      formData.append('upload_preset', 'iltp-news-images')
      const cloudName = 'philcob'
      Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
        .then((res) => {
          const userDoc = doc(db, 'news-articles', currentItem.id)
          const newFields = {
            title: title,
            content: content,
            location: locationInput,
            date: date,
            img: res.data.url,
          }
          updateDoc(userDoc, newFields)
        })
        .then(() => {
          alert('Update success!')
          setUpdateModalShow(false)
          setIsLoading(false)
          window.location.reload(false)
        })
    } else {
      const userDoc = doc(db, 'news-articles', currentItem.id)
      const newFields = {
        title: title,
        content: content,
        location: locationInput,
        date: date,
      }
      await updateDoc(userDoc, newFields)
      alert('Update success!')
      setUpdateModalShow(false)
      setIsLoading(false)
      window.location.reload(false)
    }
  }

  const changeImageEvent = (event) => {
    setSelectedImage(event.target.files[0])
    setSelectedImageUrl(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div>
      <Modal
        size='lg'
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Update News Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateItem}>
            {/* Orginal image */}
            {selectedImageUrl ? (
              <Form.Group className='mb-2'>
                <div style={{ height: '14rem' }}>
                  <img
                    className='w-100 h-100'
                    style={{ objectFit: 'cover' }}
                    src={selectedImageUrl}
                    alt=''
                  />
                </div>
              </Form.Group>
            ) : (
              <Form.Group className='mb-2'>
                <div style={{ height: '14rem' }}>
                  <img
                    className='w-100 h-100'
                    style={{ objectFit: 'cover' }}
                    src={imageUrl}
                    alt=''
                  />
                </div>
              </Form.Group>
            )}

            {/* Change image */}
            <Form.Group>
              <Form.Text>Change image</Form.Text>
              <Form.Control onChange={changeImageEvent} type='file' />
            </Form.Group>
            {/* Title form group here */}
            <Form.Group className='mb-2'>
              <label for='exampleFormControlTextarea1' className='my-2'>
                Edit title
              </label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type='text'
                id='titleValue'
              />
            </Form.Group>

            {/* Location form group here */}
            <Form.Group className='mb-2'>
              <label for='exampleFormControlTextareas' className='my-2'>
                Edit location
              </label>
              <Form.Control
                onChange={(e) => setLocationInput(e.target.value)}
                value={locationInput}
                type='text'
                id='dateValue'
              />
            </Form.Group>

            {/* Date form group here */}
            <Form.Group className='mb-2'>
              <label for='exampleFormControlTextareas' className='my-2'>
                Edit date
              </label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type='text'
                id='dateValue'
              />
            </Form.Group>

            {/* text area here */}
            <Form.Group>
              <label for='exampleFormControlTextarea1' className='my-2'>
                Edit your content
              </label>
              <Form.Control
                onChange={(e) => setContent(e.target.value)}
                value={content}
                id='exampleFormControlTextarea1'
                as='textarea'
                rows='7'
              ></Form.Control>
            </Form.Group>

            {/* Button here */}
            <Button disabled={isLoading} className='mt-3' type='submit'>
              {isLoading ? 'Updating...' : 'Update'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewsPageModal
