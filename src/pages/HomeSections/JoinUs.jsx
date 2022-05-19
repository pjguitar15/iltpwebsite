import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// animate on scroll
import 'aos/dist/aos.css'

const JoinUs = () => {
  let navigate = useNavigate()

  return (
    // background image is in join-us class
    <div className='join-us text-center'>
      <div className='col-12 mx-auto become-a-member-div p-4 mb-4 bg-white'>
        <h1 className='join-us-h1 bebas text-warning display-1 m-0'>
          Join Us!
        </h1>
        <h5 className='text-muted'>Become a member/Support Us!</h5>
        <p className='lead font-italic col-lg-7 mx-auto'>
          International Leadering Training Program is a non-profit organization.
          Our goal is to be able to host and coordinate events and activities
          youth and students can participate in for little to no cost.
        </p>
      </div>
      <Button onClick={() => navigate('/contact')} className='btn-warning mx-1'>
        Join Us
      </Button>
      <Button className='btn-warning mx-1'>
        <i className='fa fa-paypal me-1'></i>Donate
      </Button>
    </div>
  )
}

export default JoinUs
