import React from 'react'
import { Container } from 'react-bootstrap'
import DonationArt from './DonationArt'
import FundraisingPhotos from './FundraisingPhotos'
import 'aos/dist/aos.css'
import '../styles/Fundraising.css'
import DonateIcon from '../../assets/icons/donate-icon.png'
const Fundraising = () => {
  return (
    <div>
      <h1
        data-aos='fade-down'
        data-aos-duration='2000'
        className='fundraising-bg text-white text-center m-0'
      >
        <div className='col-xl-1 col-lg-3 col-4 mx-auto mb-4'>
          <img className='w-100' src={DonateIcon} alt='donate icon' />
        </div>
        ILTP Fundraising Campaign
        <p
          className='lead text-light col-md-4 mt-2 mx-auto'
          style={{ fontWeight: '100', lineHeight: '30px', fontSize: '17px' }}
        >
          The efforts of one person can't move mountains. It's the strength of
          us all working together that makes a change.
        </p>
      </h1>

      <Container>
        {/* image here */}
        <DonationArt />
        <FundraisingPhotos />
      </Container>
    </div>
  )
}

export default Fundraising
