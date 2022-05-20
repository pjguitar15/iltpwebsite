import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { db } from '../../../../firebase/firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import Axios from 'axios'
import AddNewsForm from '../../../../components/AddNewsForm'

const AddNewsModal = ({
  setAddModalShow,
  addModalShow,
  firebaseData,
  setFirebaseData,
}) => {
  const [titleInput, setTitleInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const [imageSelected, setImageSelected] = useState()
  const [selectValue, setSelectValue] = useState('')

  // connect to collections
  const collectionRef = collection(db, 'news-articles')

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    // upload image
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'iltp-news-images')

    Axios.post(`https://api.cloudinary.com/v1_1/philcob/image/upload`, formData)
      .then((res) => {
        addDoc(collectionRef, {
          title: titleInput,
          date: dateInput,
          content: contentInput,
          img: res.data.url,
          location: locationInput,
          newsType: selectValue,
          show: true,
          timestamp: serverTimestamp(),
        })
        // fake add to array
        setFirebaseData([
          {
            title: titleInput,
            location: locationInput,
            date: dateInput,
            content: contentInput,
            img: res.data.url,
            newsType: selectValue,
            show: true,
            timestamp: serverTimestamp(),
          },
          ...firebaseData,
        ])
      })
      .then(() => {
        // Add React State Realtime Effect here
        setSubmitLoading(false)
        alert('Submitted Successfuly! Page will refresh')
        setAddModalShow(false)

        // set to emptry string onSubmit
        setTitleInput('')
        setDateInput('')
        setContentInput('')
        setLocationInput('')
      })
      .catch((err) => {
        alert(err)
      })
  }
  return (
    <div>
      <Modal
        size='lg'
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Add News Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewsForm
            handleSubmit={handleSubmit}
            submitLoading={submitLoading}
            setTitleInput={setTitleInput}
            titleInput={titleInput}
            setDateInput={setDateInput}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            dateInput={dateInput}
            setSelectValue={setSelectValue}
            setContentInput={setContentInput}
            contentInput={contentInput}
            setImageSelected={setImageSelected}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddNewsModal
