import React from 'react'
import { Container } from 'react-bootstrap'
const WhatWeDo = () => {
  return (
    <div>
      <div className='py-3 bg-success'>
        <h1 className='bebas text-center text-white m-0'>What we do</h1>
      </div>
      <Container data-aos='fade-right' data-aos-duration='2000'>
        {/* Volunteer Service and Cultural Learning */}
        <div className='row' style={{ margin: '100px 0' }}>
          <h4 className='mb-4'>Volunteer Service and Cultural Learning</h4>
          <div className='col-md-6'>
            <p className='about-paragraph'>
              International Leadership Training Program (ILTP) is a 501 (c)(3)
              non-profit organization serving in the U.S. since 2001. Our
              mission is to raise young conscientious leaders who can contribute
              to peace-building efforts around the world.
            </p>
            <p className='about-paragraph'>
              The Program is designed to offer first-hand experience of the
              spirit of America; life of service, racial and cultural diversity
              and natural environment all over the country.
            </p>
            <p className='about-paragraph'>
              We provide participants with short-term comprehensive leadership
              training through volunteer service and educational seminars. We
              are confident that the program can help participants find their
              calling to promote the vision of One Family under God beyond race
              and religion.
            </p>
          </div>
          <div className='col-md-6'>
            <p className='about-paragraph'>
              ILTP received President's Volunteer Service Awards (PVSA) for it's
              commitment to serving society, as well as the status of Certifying
              Organization that can award individual, families and groups for
              qualifying volunteer hours.
            </p>
            <p className='about-paragraph'>
              As of December 2019, more than 350 people from 38 countries joined
              the program and became active community leaders in their home
              countries. We raise future leaders who can impact lives towards
              peace.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WhatWeDo
