import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
// firebase imports
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

const NewsPageModal = ({
  updateModalShow,
  setUpdateModalShow,
  currentItem,
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    setDate(currentItem.date)
    setTitle(currentItem.title)
    setContent(currentItem.content)
  }, [currentItem])

  // Firebase update here
  const updateItem = async (e) => {
    e.preventDefault()
    const userDoc = doc(db, 'news-articles', currentItem.id)
    const newFields = { title: title, content: content, date: date }
    await updateDoc(userDoc, newFields)

    alert('Update success!')
    setUpdateModalShow(false)
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
          <form onSubmit={updateItem}>
            {/* Title form group here */}
            <div className='form-group mb-2'>
              <label for='exampleFormControlTextarea1' className='my-2'>
                Edit title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type='text'
                id='titleValue'
                className='form-control'
              />
            </div>

            {/* Date form group here */}
            <div className='form-group mb-2'>
              <label for='exampleFormControlTextareas' className='my-2'>
                Edit date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                value={date}
                type='text'
                id='dateValue'
                className='form-control'
              />
            </div>

            {/* text area here */}
            <div className='form-group'>
              <label for='exampleFormControlTextarea1' className='my-2'>
                Edit your content
              </label>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='7'
              ></textarea>
            </div>

            {/* Button here */}
            <Button className='mt-3' type='submit'>
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewsPageModal
