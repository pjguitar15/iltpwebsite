import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import DonationArt from './DonationArt'
import FundraisingPhotos from './FundraisingPhotos'
import '../styles/Fundraising.css'
import DonateIcon from '../../assets/icons/donate-icon.png'
import FundraisingItems from './FundraisingItems'

// animate on scroll imports
import Aos from 'aos'
import 'aos/dist/aos.css'

const Fundraising = () => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div>
      <div
        style={{ height: '90vh' }}
        data-aos='fade-down'
        data-aos-duration='2000'
        className='fundraising-bg text-white text-center m-0'
      >
        <div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 mx-auto mb-4'>
            <img className='w-100' src={DonateIcon} alt='donate icon' />
          </div>
          <h1 className='font-poppins-500'>Support ILTP</h1>
          <p
            className='lead text-light col-md-7 mt-2 mx-auto'
            style={{ fontWeight: '100', lineHeight: '30px', fontSize: '17px' }}
          >
            The efforts of one person can't move mountains. It's the strength of
            us all working together that makes a change.
          </p>
        </div>
      </div>

      <Container>
        {/* image here */}
        {/* <FundraisingItems /> */}
        <DonationArt />
        <FundraisingPhotos />
      </Container>
    </div>
  )
}

export default Fundraising
