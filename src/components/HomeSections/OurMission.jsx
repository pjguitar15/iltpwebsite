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
      <Container
        data-aos='fade-right'
        className='text-white'
        style={{ position: 'relative' }}
      >
        <h1 className='bebas'>Our Mission</h1>
        <h1 style={missionStyle}>Mission</h1>
        <p
          className='col-md-6 lead me-auto'
          style={{ fontWeight: '300', fontSize: '28px' }}
        >
          "Impacting Lives Towards Peace raises self-awareness of the need to
          unite families, communities, nations and the world."
        </p>
      </Container>
    </div>
  )
}

export default OurMission
