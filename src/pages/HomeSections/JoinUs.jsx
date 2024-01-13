import React from 'react'
import { useNavigate } from 'react-router-dom'
import PillButton from '../../components/PillButton'

// animate on scroll
import 'aos/dist/aos.css'

const JoinUs = () => {
  let navigate = useNavigate()

  return (
    // background image is in join-us class
    <div className='join-us text-center text-white'>
      <h1 className='display-2 m-0 font-poppins-500'>Join Us!</h1>
      <div className='col-lg-6 mx-auto become-a-member-div p-4 mb-4 '>
        <h3 className='text-uppercase font-poppins-500'>
          Become a member/Support Us!
        </h3>
        <p
          className='mx-auto font-poppins-400'
          style={{ fontSize: '18px', color: '#c9c9c9' }}
        >
          International Leadership Training Program is a non-profit
          organization. Our goal is to be able to host and coordinate events and
          activities youth and students can participate in for little to no
          cost.
        </p>
      </div>

      <PillButton
        primaryColor='#FFC107'
        secondaryColor='#ffd146'
        textColor='#1f1f1f'
        handleClick={() => navigate('/contact')}
      >
        Join Us
      </PillButton>
      <PillButton
        primaryColor='#FFC107'
        secondaryColor='#ffd146'
        textColor='#1f1f1f'
        handleClick={() => navigate('/paypal-payment')}
      >
        <i className='fa fa-paypal me-1'></i>Donate
      </PillButton>
    </div>
  )
}

export default JoinUs
