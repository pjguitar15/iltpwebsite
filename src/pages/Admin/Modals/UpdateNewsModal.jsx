import React, { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"
// firebase imports
import { db } from "../../../firebase/firebase-config"
import { updateDoc, doc } from "firebase/firestore"
import Axios from "axios"
import useMultipleImagesUploader from "../../../helpers/hooks/useMultipleImagesUploader"

const NewsPageModal = ({
  updateModalShow,
  setUpdateModalShow,
  currentItem,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [secondaryContent, setSecondaryContent] = useState('')
  const [date, setDate] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState('')
  const [multipleImages, setMultipleImages] = useState([])

  const { uploadImages } = useMultipleImagesUploader()

  useEffect(() => {
    setLocationInput(currentItem.location)
    setDate(currentItem.date)
    setTitle(currentItem.title)
    setContent(currentItem.content)
    setSecondaryContent(currentItem.secondaryContent ?? '')
    setMultipleImages(currentItem.multipleImages)
    setImageUrl(currentItem.img)
  }, [currentItem])

  // Firebase update here
  const updateItem = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const results = await uploadImages(multipleImages)
    const imgUrls = results.map((item) => item.url)
    setMultipleImages(imgUrls)

    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', selectedImage) // selectedImage is a state
    formData.append('upload_preset', 'iltp-news-images')(formData)
    const cloudName = 'philcob'
    let featuredImgUrl = ''
    if (selectedImage) {
      const response = await Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      featuredImgUrl = response.data.url
    }

    const userDoc = doc(db, 'news-articles', currentItem.id)
    const newFields = {
      title,
      content,
      location: locationInput,
      date,
      multipleImages,
      secondaryContent,
      img: featuredImgUrl !== '' ? featuredImgUrl : imageUrl,
    }

    updateDoc(userDoc, newFields).then(() => {
      alert('Update success!')
      setUpdateModalShow(false)
      setIsLoading(false)
      window.location.reload(false)
    })
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

            <div className='row mt-4 mb-3'>
              <h6>Current multiple images</h6>
              {multipleImages?.map((item, index) => (
                <div className='col-lg-2' key={index}>
                  <img className='w-100' src={item} alt='' />
                </div>
              ))}
            </div>

            <Form.Group>
              <Form.Text>Update multiples images</Form.Text>
              <Form.Control
                onChange={(e) => {
                  const files = e.target.files
                  const filesArray = Array.from(files)
                  setMultipleImages(filesArray)
                }}
                type='file'
                multiple
              />
            </Form.Group>

            {/* text area here */}
            <Form.Group>
              <label for='exampleFormControlTextarea2' className='my-2'>
                Edit your secondary content
              </label>
              <Form.Control
                onChange={(e) => {
                  setSecondaryContent(e.target.value)
                }}
                value={secondaryContent}
                id='exampleFormControlTextarea2'
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
