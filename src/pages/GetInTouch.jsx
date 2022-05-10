import React from 'react'
import { Container } from 'react-bootstrap'

// animate on scroll
import 'aos/dist/aos.css'

const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <Container>
        <h1
          data-aos='zoom-in'
          data-aos-duration='500'
          className='bebas get-in-touch-text text-center m-0'
        >
          Get in touch
        </h1>
        <p
          data-aos='zoom-in'
          data-aos-duration='500'
          className='text-center lead col-lg-6 mx-auto'
        >
          Contact us for more information to find out about our international
          leadership training program
        </p>
        <div className='contact-container row text-center m-0 py-5'>
          <div
            data-aos='fade-right'
            data-aos-duration='500'
            className='email col-lg-4'
          >
            <i className='bi bi-envelope-fill contact-icons'></i>
            <h3 className='bebas contacts-label'>EMAIL</h3>
            <span>info@iltp.org</span>
          </div>
          <div
            data-aos='fade-down'
            data-aos-duration='500'
            className='find col-lg-4'
          >
            <i className='bi bi-geo-alt-fill contact-icons'></i>
            <h3 className='bebas contacts-label'>FIND</h3>
            <span>111 Charlotte Pl. Suite 104 Englewood Cliffs, NJ 07632</span>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='500'
            className='call col-lg-4'
          >
            <i className='bi bi-telephone-fill contact-icons'></i>
            <h3 className='bebas contacts-label'>CALL</h3>
            <div className='d-flex justify-content-center flex-column'>
              <span className=''>+1 201 408 4395</span>
              <span className=''>+1 201 408 4759</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GetInTouch
