import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Home.css'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurVision = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='mission-vision'>
      <Container data-aos='fade-left' className='text-white text-end'>
        <h1 className='text-success bebas'>Our Vision</h1>

        <p className='text-dark lead col-md-6 ms-auto'>
          "Impacting Lives Towards Peace envisions One Family under God - living
          in peace and harmony beyond races and religions.”
        </p>
      </Container>
    </div>
  )
}

export default OurVision
