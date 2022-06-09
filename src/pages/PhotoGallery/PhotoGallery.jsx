import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import OurActivities from '../Fundraising/OurActivities'
import Footer from '../../pages/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const PhotoGallery = () => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div>
      <h1
        data-aos='fade-down'
        data-aos-duration='2000'
        className='about-us-bg text-white text-center m-0 rubik-400'
      >
        Photo Gallery
      </h1>
      <Container>
        <OurActivities />
      </Container>
      <Footer />
    </div>
  )
}

export default PhotoGallery
