import React from 'react'
import WhatWeDo from './WhatWeDo'
import Objectives from './Objectives'
import LogoAndDesc from './LogoAndDesc'
import OurTeam from './OurTeam'
import { Container } from 'react-bootstrap'
import '../styles/AboutUs.css'

import 'aos/dist/aos.css'

const AboutUs = () => {
  return (
    <div>
      <h1
        data-aos='fade-down'
        data-aos-duration='2000'
        className='about-us-bg text-white text-center m-0'
      >
        About Us
      </h1>
      <Container style={{ padding: '100px 0' }}>
        <LogoAndDesc />
        <hr className='my-5' />

        <Objectives />
      </Container>
      <WhatWeDo />

      {/* Our team section */}
      <OurTeam />
      <div className='text-center py-4 my-4 text-decoration-underline'>
        <h4>Our Vision is One Family under God beyond race and religion.</h4>
        <h4>
          Our Mission is to raise future leaders by impacting lives towards
          peace.
        </h4>
      </div>
      <hr />
    </div>
  )
}

export default AboutUs
