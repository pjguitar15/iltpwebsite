import React, { useState, useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'

const TestForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()

  const submitHandler = (e) => {
    // Service ID: service_0y2ubqc
    // template ID: template_k3tfj9f
    e.preventDefault()
    emailjs
      .sendForm(
        'service_0y2ubqc',
        'template_k3tfj9f',
        form.current,
        'bZ8KJp4JI-UL8iDSE'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    alert('Form Submitted')
  }

  return (
    <div className='bg-dark' style={{ padding: '150px 0' }}>
      <Container>
        <Form ref={form} onSubmit={submitHandler} className='col-8 mx-auto'>
          {/* send to which email */}
          <Form.Group className='my-3'>
            <Form.Control
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </Form.Group>
          {/* message */}
          <Form.Group className='my-3'>
            <Form.Control
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message'
            />
          </Form.Group>
          <Form.Group>
            <Button type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default TestForm
