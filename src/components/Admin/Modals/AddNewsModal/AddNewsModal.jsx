import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { db } from '../../../../firebase/firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import Axios from 'axios'
import ModalBody from './ModalBody'

const AddNewsModal = ({ setAddModalShow, addModalShow }) => {
  const [titleInput, setTitleInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const [imageSelected, setImageSelected] = useState()
  const [cloudinaryUrl, setCloudinaryUrl] = useState('')
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
          newsType: selectValue,
          show: true,
          timestamp: serverTimestamp(),
        })
      })
      .then(() => {
        // Add React State Realtime Effect here

        setSubmitLoading(false)
        alert('Submitted Successfuly!')
        setAddModalShow(false)
        // set to emptry string onSubmit
        setTitleInput('')
        setDateInput('')
        setContentInput('')
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
          <ModalBody
            handleSubmit={handleSubmit}
            submitLoading={submitLoading}
            setTitleInput={setTitleInput}
            titleInput={titleInput}
            setDateInput={setDateInput}
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
