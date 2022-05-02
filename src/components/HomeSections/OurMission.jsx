import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Home.css'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurMission = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='bg-success mission-vision'>
      <Container data-aos='fade-right' className='text-white'>
        <h1 className='bebas'>Our Mission</h1>
        <p className='col-md-6 lead me-auto'>
          "Impacting Lives Towards Peace raises self-awareness of the need to
          unite families, communities, nations and the world."
        </p>
      </Container>
    </div>
  )
}

export default OurMission
