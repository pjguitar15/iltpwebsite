import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      'First Name: ' +
        firstNameInput +
        '\nLast Name: ' +
        lastNameInput +
        '\nEmail: ' +
        emailInput +
        '\nMessage: ' +
        messageInput
    )
    // alert('Last Name: ' + lastNameInput)
    // alert('Email: ' + emailInput)
    // alert('Message: ' + messageInput)
    setFirstNameInput('')
    setLastNameInput('')
    setEmailInput('')
    setMessageInput('')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className='col-lg-7'>
        <Form.Group className='mb-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            value={firstNameInput}
            onChange={(e) => {
              setFirstNameInput(e.target.value)
            }}
            type='text'
            placeholder='Enter your first name'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            value={lastNameInput}
            onChange={(e) => {
              setLastNameInput(e.target.value)
            }}
            type='text'
            placeholder='Enter your last name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            value={emailInput}
            onChange={(e) => {
              setEmailInput(e.target.value)
            }}
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your message</Form.Label>
          <Form.Control
            required
            value={messageInput}
            onChange={(e) => {
              setMessageInput(e.target.value)
            }}
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
