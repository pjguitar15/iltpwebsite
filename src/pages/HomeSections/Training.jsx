import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Home.css'
import PointingAtShirtImg from '../../assets/pointing-shirt.png'
import PillButton from '../../components/PillButton'
import { useNavigate } from 'react-router-dom'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const Training = () => {
  let navigate = useNavigate()
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return (
    <div className='training text-center text-lg-start mx-0 px-0'>
      <Container>
        <div className='row mx-0'>
          <div data-aos='fade-right' className='col-lg-7 col-12'>
            <h1 className='text-left m-0 future-leaders bebas'>
              The Future Leaders
            </h1>
            <h1 className='text-left m-0 ready-to-start text-white bebas'>
              Ready to Start Training?
            </h1>
            <p className='col-md-12 text-white lead'>
              We empower you with everything you need to be a successful and
              insightful leader. Develop the abilities and build a strong
              foundation as someone who can lead the community.
            </p>
            <PillButton
              primaryColor='#FFC107'
              secondaryColor='#ffd146'
              textColor='#313131'
              handleClick={() => navigate('/about')}
            >
              Learn more
            </PillButton>
          </div>
          <div data-aos='fade-left' className='col-lg-5 col-12'>
            <img
              className='poiting-at-shirt-img d-none d-lg-inline'
              src={PointingAtShirtImg}
              alt='iltp-join'
              style={{
                borderRadius: '20px',
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Training
