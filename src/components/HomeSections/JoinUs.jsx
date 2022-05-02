import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const JoinUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className='join-us text-center'>
      <Container data-aos='zoom-in' data-aos-duration='500'>
        <div className='col-10 mx-auto become-a-member-div p-4 rounded-2 mb-4 bg-white'>
          <h1 className='join-us-h1 bebas text-warning display-1 m-0'>
            Join Us!
          </h1>
          <h5 className='text-muted'>Become a member/Support Us!</h5>
          <p className='lead font-italic col-10 mx-auto'>
            International Leadering Training Program is a non-profit
            organization. Our goal is to be able to host and coordinate events
            and activities youth and students can participate in for little to
            no cost.
          </p>
        </div>
        <Button className='btn-warning mx-1'>Join Us</Button>
        <Button className='btn-warning mx-1'>
          <i className='fa fa-paypal me-1'></i>Donate
        </Button>
      </Container>
    </div>
  )
}

export default JoinUs
