import React, { useState, useEffect } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { db } from '../../firebase/firebase-config'
import { getDocs, query, collection } from 'firebase/firestore'
import ConfirmJumbotronUpdate from '../../components/ConfirmJumbotronUpdate'
const AdminJumbo = () => {
  const [jumbotronItem, setJumbotronItem] = useState([])
  const [title, setTitle] = useState('Loading...')
  const [content, setContent] = useState('Loading...')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  // Modal states
  const [show, setShow] = useState(false)

  useEffect(() => {
    const collectionRef = collection(db, 'jumbotron-section')
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setJumbotronItem(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
    setShowSuccessMessage(false)
  }, [])
  useEffect(() => {
    jumbotronItem.forEach((item) => {
      setTitle(item.title)
      setContent(item.content)
    })
  }, [jumbotronItem])
  return (
    <div>
      <ConfirmJumbotronUpdate
        title={title}
        content={content}
        show={show}
        setShow={setShow}
        jumbotronItem={jumbotronItem}
        setShowSuccessMessage={setShowSuccessMessage}
      />
      <h1>Jumbotron section</h1>
      <p className='col-7 lead'>You can update the landing page text here</p>
      <hr />
      <Form>
        <Alert variant='success' show={showSuccessMessage}>
          Updated Successfully
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => setShow(true)}
          size='sm'
          variant='warning'
          className='mt-3'
        >
          Update
        </Button>
      </Form>
    </div>
  )
}

export default AdminJumbo
