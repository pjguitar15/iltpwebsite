import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData'
import { useNavigate } from 'react-router-dom'
const NewsSlug = () => {
  const [data] = useState(NewsData)
  let navigate = useNavigate()
  let { id } = useParams()
  return (
    <div style={{ padding: '300px 100px' }} className='bg-dark text-white'>
      <Container>
        {console.log(id)}
        {data
          .filter((item) => item.id === id)
          .map((item, index) => (
            <div key={index} className='text-center'>
              <div className='col-3 mx-auto'>
                <img className='w-100' src={item.img} alt='image item' />
              </div>
              <h1>{item.title}</h1>
              <p className='text-center'>{item.id}</p>
              <h6>News Type: {item.newsType}</h6>
            </div>
          ))}
        <div className='text-center mt-4'>
          <Button
            onClick={() => {
              navigate('/news')
            }}
            variant='outline-warning'
          >
            Back to News
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default NewsSlug
