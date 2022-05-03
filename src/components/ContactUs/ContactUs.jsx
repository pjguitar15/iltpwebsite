import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
// animate on scroll
import 'aos/dist/aos.css'

const ContactUs = () => {
  return (
    <>
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='bg-primary'
        style={{ padding: '150px 0' }}
      >
        <h1 className='text-white display-1 text-center py-3 col-lg-4 mx-auto my-0'>
          Contact Us
        </h1>
      </div>
      <Container data-aos='flip-left' data-aos-duration='1000' className='py-5'>
        <h4>Get in Touch</h4>
        <p className='text-muted col-lg-5'>
          If you have any questions or you just want to know more about ILTP,
          please fill out the form below. We do our best to respond as soon as
          we can.
        </p>
        <Form className='col-lg-7'>
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
      </Container>
    </>
  )
}

export default ContactUs
