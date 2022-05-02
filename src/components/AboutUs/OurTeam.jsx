import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/AboutUs.css'
const OurTeam = () => {
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
          <div className='col-3'>
            <img
              className='w-100'
              src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.18169-9/13781919_10205381455416404_5189727867409492464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=BtexiZCK-aUAX9uzkmg&_nc_ht=scontent.fmnl8-1.fna&oh=00_AT9q8lsw9iBEzjiR7avlqOyUgoHXYDzGmc3bqmkO-hGhcg&oe=628FA394'
              alt=''
            />
            <h6 className='mt-3'>Hyung Ki Kim</h6>
            <div className='org-title'>Chairman</div>
          </div>
          <div className='col-3'>
            <img
              className='w-100'
              src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.18169-9/13781919_10205381455416404_5189727867409492464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=BtexiZCK-aUAX9uzkmg&_nc_ht=scontent.fmnl8-1.fna&oh=00_AT9q8lsw9iBEzjiR7avlqOyUgoHXYDzGmc3bqmkO-hGhcg&oe=628FA394'
              alt=''
            />
            <h6 className='mt-3'>Another person here</h6>
            <div className='org-title'>Chairman</div>
          </div>
          <div className='col-3'>
            <img
              className='w-100'
              src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.18169-9/13781919_10205381455416404_5189727867409492464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=BtexiZCK-aUAX9uzkmg&_nc_ht=scontent.fmnl8-1.fna&oh=00_AT9q8lsw9iBEzjiR7avlqOyUgoHXYDzGmc3bqmkO-hGhcg&oe=628FA394'
              alt=''
            />
            <h6 className='mt-3'>Another person here</h6>
            <div className='org-title'>Chairman</div>
          </div>
          <div className='col-3'>
            <img
              className='w-100'
              src='https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.18169-9/13781919_10205381455416404_5189727867409492464_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=BtexiZCK-aUAX9uzkmg&_nc_ht=scontent.fmnl8-1.fna&oh=00_AT9q8lsw9iBEzjiR7avlqOyUgoHXYDzGmc3bqmkO-hGhcg&oe=628FA394'
              alt=''
            />
            <h6 className='mt-3'>Another person here</h6>
            <div className='org-title'>Chairman</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
