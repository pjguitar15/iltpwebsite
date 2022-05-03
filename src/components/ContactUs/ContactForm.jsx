import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('still working on this submit button -developer')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className='col-lg-7'>
        <Form.Group className='mb-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your first name' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your last name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your message</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
