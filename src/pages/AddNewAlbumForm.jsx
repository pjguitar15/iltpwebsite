import React, { useState } from 'react'
import { Form, Button, Container, ListGroup, Spinner } from 'react-bootstrap'

const AddNewAlbumForm = ({
  albumNames,
  setAlbumNames,
  setAddNewAlbumSelected,
}) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [albumNameInput, setAlbumNameInput] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    if (albumNameInput) {
      setAlbumNames([...albumNames, { name: albumNameInput }])
      setAlbumNameInput('')
      setAddNewAlbumSelected(false)
      console.log()
    } else {
      console.log('Field is empty')
    }
  }
  return (
    <>
      <Container>
        <Form
          onSubmit={formSubmit}
          className='col-xl-8 mx-auto bg-light p-5 border mt-5'
        >
          <h1 className='display-6 my-3'>Add New Album</h1>
          <ListGroup>
            <div className='small'>Current Albums</div>
            {albumNames.map((item, index) => (
              <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
            ))}
          </ListGroup>
          {/* Form */}
          <Form.Group className='mt-3'>
            <Form.Text>Enter your new album here</Form.Text>
            <Form.Control
              value={albumNameInput}
              onChange={(e) => setAlbumNameInput(e.target.value)}
              placeholder='Enter album name'
            />
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
                  'Add'
                )}
              </Button>
              <Button
                onClick={() => setAddNewAlbumSelected(false)}
                disabled={submitLoading}
                variant='primary'
                size='sm'
              >
                Back to image upload
              </Button>
            </Form.Group>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default AddNewAlbumForm
