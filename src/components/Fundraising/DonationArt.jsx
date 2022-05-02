import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../styles/Fundraising.css'
import 'aos/dist/aos.css'
import DonateIcon from '../../assets/icons/donate-icon.png'
const DonationArt = () => {
  // donate handler
  const donateButton = () => {
    alert('im still working on this. thank you!')
  }
  return (
    <div
      className='shadow py-5 my-5'
      data-aos='flip-left'
      data-aos-duration='2000'
    >
      <Container className='text-center'>
        <div className='col-xl-1 col-lg-3 col-4 mx-auto mb-4'>
          <img className='w-100' src={DonateIcon} alt='donate icon' />
        </div>
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
        <Button onClick={donateButton} variant='warning'>
          <i className='fa fa-paypal me-2'></i>Donate with Paypal
        </Button>
      </Container>
    </div>
  )
}

export default DonationArt
