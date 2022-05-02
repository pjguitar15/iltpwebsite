import React from 'react'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import icon5 from '../../assets/icons/icon5.svg'
import 'aos/dist/aos.css'
const Objectives = () => {
  return (
    <div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        style={{ marginTop: '80px' }}
        className='text-center mx-auto col-md-6 py-3'
      >
        <h5 className='m-0' style={{ fontWeight: '500' }}>
          At ILTP, our objective comes down to 5 simple points:
        </h5>
      </div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='row text-center my-5 py-4'
      >
        <div className='col-xs-6 py-5 px-3 fw-bold col-sm-4 col-lg-2 p-1 mx-auto mb-5 shadow rounded hover-animate'>
          <div className='col-6 mx-auto mb-3'>
            <img className='w-100 ' src={icon1} alt='' />
          </div>
          <div>Promote universal values beyond race and religion.</div>
        </div>
        <div className='col-xs-6 py-5 px-3 fw-bold col-sm-4 col-lg-2 p-1 mx-auto mb-5  shadow rounded hover-animate'>
          <div className='col-6 mx-auto mb-3'>
            <img className='w-100' src={icon2} alt='' />
          </div>
          <div className=' '>
            Experience cultural diversity and respect differences.
          </div>
        </div>
        <div className='col-xs-6 py-5 px-3 fw-bold col-sm-4 col-lg-2 p-1 mx-auto mb-5 shadow rounded hover-animate'>
          <div className='col-7 mx-auto mb-3'>
            <img className='w-100' src={icon3} alt='' />
          </div>
          <div className=' '>
            Acknowledge constitutional principles of American society.
          </div>
        </div>
        <div className='col-xs-6 py-5 px-3 fw-bold col-sm-4 col-lg-2 p-1 mx-auto mb-5 shadow rounded hover-animate'>
          <div className='col-6 mx-auto mb-3'>
            <img className='w-100' src={icon4} alt='' />
          </div>
          <div className=' '>
            Cultivate love and compassion through volunteer services.
          </div>
        </div>
        <div className='col-xs-6 py-5 px-3 fw-bold col-sm-4 col-lg-2 p-1 mx-auto mb-5 shadow rounded hover-animate'>
          <div className='col-6 mx-auto mb-3'>
            <img className='w-100' src={icon5} alt='' />
          </div>
          <div className=''>
            Enhance leadership abilities through educational seminars.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objectives
