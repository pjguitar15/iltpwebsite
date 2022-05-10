import React, { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import cert2022 from '../../assets/iltp-cert/cert-2022.jpg'
import cert2020 from '../../assets/iltp-cert/cert-2020.jpg'
import cert2019 from '../../assets/iltp-cert/cert-2019.jpg'
import cert2019Education from '../../assets/iltp-cert/cert-2019-education.jpg'
import cert2018 from '../../assets/iltp-cert/cert-2018.jpg'
import cert2017 from '../../assets/iltp-cert/cert-2017.jpg'
import cert2016 from '../../assets/iltp-cert/cert-2016.jpg'
import cert2015 from '../../assets/iltp-cert/cert-2015.jpg'
import certOther1 from '../../assets/iltp-cert/cert-other-1.jpg'
import certOther2 from '../../assets/iltp-cert/cert-other-2.jpg'
import certOther3 from '../../assets/iltp-cert/cert-other-3.jpg'
import presidentAward from '../../assets/PVSAimage.png'

const Awards = () => {
  const [index, setIndex] = useState(0)

  // certs object
  const certificates = [
    {
      cert1: cert2022,
      cert2: cert2020,
      cert3: cert2019,
    },
    {
      cert1: cert2019Education,
      cert2: cert2018,
      cert3: cert2017,
    },
    {
      cert1: cert2016,
      cert2: cert2015,
      cert3: certOther1,
    },
    {
      cert1: certOther2,
      cert2: certOther3,
      cert3: cert2022,
    },
  ]

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div
      className='m-0 text-center awards'
      style={{ paddingTop: '6vh', paddingBottom: '6vh' }}
    >
      <Container>
        <div
          data-aos='fade-down'
          data-aos-duration='1000'
          className='col-lg-6 mx-auto'
        >
          <img className='w-100' src={presidentAward} alt='PVSA logo' />
        </div>
        <h1
          data-aos='fade-down'
          data-aos-duration='1000'
          className='bebas mt-4 col-lg-4 mx-auto'
          style={{
            borderLeft: '4px solid red',
            borderRight: '4px solid red',
          }}
        >
          ILTP PVSA Award 2015 - 2022
        </h1>
      </Container>
      <Carousel
        variant='dark'
        data-aos='fade-down'
        data-aos-duration='1000'
        className='text-light m-0 d-flex align-items-center justify-content-center flex-column'
        activeIndex={index}
        onSelect={handleSelect}
        pause='false'
      >
        {certificates.map((item, index) => (
          <Carousel.Item key={index} interval={6000} className='px-5'>
            <div className='row px-5 py-5 container mx-auto'>
              <div className='col-md-6 col-lg-4 mx-auto mb-3'>
                <img className='w-100 shadow' src={item.cert1} alt='cert' />
              </div>
              <div className='col-md-6 col-lg-4 mx-auto mb-3'>
                <img className='w-100 shadow' src={item.cert2} alt='cert' />
              </div>
              <div className='col-md-6 col-lg-4 mx-auto mb-3'>
                <img className='w-100 shadow' src={item.cert3} alt='cert' />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Awards
