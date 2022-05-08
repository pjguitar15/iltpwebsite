import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/AboutUs.css'
import { OurTeamData } from '../../Data/OurTeamData'
const OurTeam = () => {
  const [data] = useState(OurTeamData)
  return (
    <div>
      <div className='bg-dark py-5'>
        <h1 className='text-white bebas m-0 p-0 text-center'>Our Team</h1>
        <p className='text-white lead text-center col-lg-4 mx-auto'>
          ILTP is made up of passionate young people from different nations that
          practices the culture of heart
        </p>
      </div>
      <Container className='py-5' style={{ marginTop: '60px' }}>
        <div className='row'>
          {data.map((item, index) => (
            <div key={index} className='col-3 mb-4'>
              <img className='w-100' src={item.image} />
              <h6 className='mt-3'>{item.name}</h6>
              <div className='org-title'>{item.position}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
