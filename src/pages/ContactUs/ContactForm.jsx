import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [fullNameInput, setFullNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [contactNumberInput, setContactNumberInput] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)

  // target form
  const form = useRef()

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitLoading(true)
    // emailjs function here
    emailjs
      .sendForm(
        'service_0smq8lv',
        'template_9yxvnsb',
        form.current,
        'vu26VMAeobO1GRbGM'
      )
      .then(
        (result) => {
          setSubmitLoading(false)
          alert('Form submitted')
          console.log(result.text)
        },
        (error) => {
          setSubmitLoading(false)
          alert(error.text)
          console.log(error.text)
        }
      )

    // clear forms
    setFullNameInput('')
    setEmailInput('')
    setMessageInput('')
    setContactNumberInput('')
  }
  return (
    <div>
      <Form ref={form} onSubmit={handleSubmit} className='col-lg-7'>
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            disabled={submitLoading}
            required
            value={fullNameInput}
            onChange={(e) => {
              setFullNameInput(e.target.value)
            }}
            type='text'
            name='name'
            placeholder='Enter your full name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            disabled={submitLoading}
            required
            value={emailInput}
            onChange={(e) => {
              setEmailInput(e.target.value)
            }}
            type='email'
            name='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            disabled={submitLoading}
            required
            value={contactNumberInput}
            onChange={(e) => {
              setContactNumberInput(e.target.value)
            }}
            type='text'
            name='contactNumber'
            placeholder='Enter contact number'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your message</Form.Label>
          <Form.Control
            disabled={submitLoading}
            required
            value={messageInput}
            onChange={(e) => {
              setMessageInput(e.target.value)
            }}
            placeholder='Type your message here'
            as='textarea'
            name='message'
            rows={3}
          />
        </Form.Group>
        <Button disabled={submitLoading} variant='primary' type='submit'>
          {submitLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
