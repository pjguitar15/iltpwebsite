import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'
// animate on scroll
import 'aos/dist/aos.css'
import Aos from 'aos'
// import photo

const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <>
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='contact-us-bg'
        style={{ padding: '150px 0' }}
      >
        <h1 className='text-white display-1 text-center py-3 col-lg-4 mx-auto my-0'>
          Contact Us
        </h1>
      </div>
      <Container
        data-aos='flip-left'
        data-aos-duration='1000'
        className='py-5 rubik-400'
      >
        <h4>Talk to Us</h4>
        <p className='text-muted col-lg-5'>
          For your inquiry, please fill out the form below. We will do our best
          to respond as soon as we can.
        </p>
        <ContactForm />
      </Container>
    </>
  )
}

export default ContactUs
