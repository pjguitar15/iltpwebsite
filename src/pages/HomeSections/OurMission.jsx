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

  const missionStyle = {
    position: 'absolute',
    top: '40%',
    right: '0',
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
    <div className='bg-success mission-vision'>
      <Container className='text-white px-4' style={{ position: 'relative' }}>
        <h1 data-aos='fade-left' style={missionStyle}>
          Mission
        </h1>
        <div data-aos='fade-down' className='div m-0 p-0'>
          <h1 className='bebas'>Our Mission</h1>
          <p
            className='col-md-6 lead me-auto'
            style={{ fontWeight: '300', fontSize: '28px' }}
          >
            "Our mission is to raise young conscientious leaders who can
            contribute to peace-building efforts around the world."
          </p>
        </div>
      </Container>
    </div>
  )
}

export default OurMission
