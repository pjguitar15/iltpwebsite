import React from 'react'
import { Container, Button, Form, Spinner } from 'react-bootstrap'
const TestimonyAddForm = ({
  submitHandler,
  submitLoading,
  nameInput,
  setNameInput,
  batchYearInput,
  setBatchYearInput,
  contentInput,
  setContentInput,
  setSelectedImage,
  navigate,
}) => {
  return (
    <div>
      <Container>
        <Form
          onSubmit={submitHandler}
          className='col-xl-8 mx-auto bg-light p-5 border mt-5'
        >
          <h1 className='display-3 my-3'>Add testimony</h1>
          {/* Name */}
          <Form.Group className='my-2'>
            <Form.Control
              disabled={submitLoading}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
              type='text'
              placeholder='Enter name'
            />
          </Form.Group>
          {/* Batch year */}
          <Form.Group className='my-2'>
            <Form.Control
              disabled={submitLoading}
              value={batchYearInput}
              onChange={(e) => setBatchYearInput(e.target.value)}
              required
              type='text'
              placeholder='Enter batch year'
            />
          </Form.Group>
          {/* Content */}
          <Form.Group className='my-2'>
            <Form.Control
              disabled={submitLoading}
              value={contentInput}
              onChange={(e) => setContentInput(e.target.value)}
              required
              as='textarea'
              rows={3}
              placeholder='Enter testimony'
            />
          </Form.Group>
          {/* Image */}
          <Form.Group className='my-2'>
            <label className='mb-1 text-muted'>
              Upload the ILTP member's image
            </label>
            <Form.Control
              disabled={submitLoading}
              onChange={(e) => setSelectedImage(e.target.files[0])}
              required
              type='file'
            />
          </Form.Group>
          <Form.Group>
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
                'Submit'
              )}
            </Button>
            <Button
              disabled={submitLoading}
              variant='primary'
              size='sm'
              onClick={() => navigate('/adminpage')}
            >
              Back
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default TestimonyAddForm
