import React from 'react'
import PillButton from '../../components/PillButton'
import '../styles/Fundraising.css'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
const DonationArt = () => {
  const navigate = useNavigate()
  return (
    <div
      className='shadow py-5 my-5 text-center col-12 p-0'
      data-aos='flip-left'
      data-aos-duration='2000'
    >
      <p className='text-danger montserrat art-red-paragraph my-0'>
        DONATE FOR A CAUSE
      </p>
      <h1 className='dark-blue montserrat col-md-5 mx-auto my-0 py-3 you-will-make-a-difference'>
        You Will Make a Difference
      </h1>
      <p className='text-danger montserrat art-red-paragraph my-0'>
        ILTP FUNDRAISING CAMPAIGN
      </p>
      <p className='dark-blue montserrat col-md-4 mx-auto mt-3'>
        Giving is not just about making a donation. It's about making a
        difference.
      </p>
      <PillButton
        primaryColor='#FFC107'
        secondaryColor='#ffd146'
        textColor='#1d1d1d'
        handleClick={() => navigate('/paypal-payment')}
      >
        <i className='fa fa-paypal me-2'></i>Donate with Paypal
      </PillButton>
    </div>
  )
}

export default DonationArt
