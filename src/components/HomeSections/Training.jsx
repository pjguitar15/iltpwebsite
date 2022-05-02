import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import '../styles/Home.css'
import PointingAtShirtImg from '../../assets/pointing-shirt.png'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const Training = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='bg-dark training text-center text-lg-start'>
      <Container>
        <div className='row'>
          <div
            data-aos='fade-right'
            data-aos-duration='300'
            className='col-lg-7 col-12'
          >
            <h1 className='text-left m-0 future-leaders bebas'>
              The Future Leaders
            </h1>
            <h1 className='text-left m-0 ready-to-start text-white bebas'>
              Ready to Start Training?
            </h1>
            <p className='col-md-12 text-white lead'>
              We empower you with everything you need to be a successful and
              insightful leader. Develop the abilities and build a strong
              foundation as someone who can leader the community.
            </p>
            <Button variant='success'>Learn more</Button>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='300'
            className='col-lg-5 col-12'
          >
            <img
              className='poiting-at-shirt-img d-none d-lg-inline'
              src={PointingAtShirtImg}
              alt=''
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Training
