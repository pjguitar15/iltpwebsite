import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PillButton from '../../components/PillButton'

// animate on scroll
import 'aos/dist/aos.css'

const JoinUs = () => {
  let navigate = useNavigate()

  return (
    // background image is in join-us class
    <div className='join-us text-center text-white'>
      <h1 className='display-1 m-0'>Join Us!</h1>
      <div className='col-lg-6 mx-auto become-a-member-div p-4 mb-4 '>
        <h3>Become a member/Support Us!</h3>
        <p className='lead mx-auto'>
          International Leadering Training Program is a non-profit organization.
          Our goal is to be able to host and coordinate events and activities
          youth and students can participate in for little to no cost.
        </p>
      </div>

      <PillButton
        primaryColor='#FFC107'
        secondaryColor='#ffd146'
        textColor='#303030'
        handleClick={() => navigate('/contact')}
      >
        Join Us
      </PillButton>
      <PillButton
        primaryColor='#FFC107'
        secondaryColor='#ffd146'
        textColor='#303030'
        handleClick={() => navigate('/paypal-payment')}
      >
        <i className='fa fa-paypal me-1'></i>Donate
      </PillButton>
    </div>
  )
}

export default JoinUs
