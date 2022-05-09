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
  const visionStyle = {
    position: 'absolute',
    color: 'grey',
    top: '40%',
    left: '0',
    fontSize: '250px',
    fontFamily: 'bebas neue',
    opacity: 0.1,
    userSelect: 'none' /* supported by Chrome and Opera */,
    WebkitUserSelect: 'none' /* Safari */,
    KhtmlUserSelect: 'none' /* Konqueror HTML */,
    MozUserSelect: 'none' /* Firefox */,
    MsUserSelect: 'none' /* Internet Explorer/Edge */,
  }
  return (
    <div className='mission-vision'>
      <Container
        className='text-white text-end'
        style={{ position: 'relative' }}
      >
        <h1 data-aos='fade-right' style={visionStyle}>
          Vision
        </h1>
        <div data-aos='fade-down' className='div m-0 p-0'>
          <h1 className='text-success bebas'>Our Vision</h1>
          <p
            className='text-dark lead col-md-6 ms-auto'
            style={{ fontWeight: '300', fontSize: '28px' }}
          >
            "Impacting Lives Towards Peace envisions One Family under God -
            living in peace and harmony beyond races and religions.”
          </p>
        </div>
      </Container>
    </div>
  )
}

export default OurVision
