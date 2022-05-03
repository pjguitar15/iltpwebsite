import React, { useState } from 'react'
import { NewsData } from '../../Data/NewsData'
import { Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// animate on scroll
import 'aos/dist/aos.css'

const News = () => {
  const [data] = useState(NewsData)
  let navigate = useNavigate()
  return (
    <>
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='bg-success '
        style={{ padding: '150px 0' }}
      >
        <h1 className='text-white display-1 text-center py-3 col-lg-4 mx-auto my-0'>
          News
        </h1>
      </div>
      <Container className='py-5'>
        <div className='row'>
          {data.map((item, index) => (
            <div
              data-aos='zoom-in'
              key={index}
              className='p2 my-3 col-md-6 col-lg-4'
            >
              <Card>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '15vw',
                    objectFit: 'cover',
                  }}
                  variant='top'
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {item.date}
                  </Card.Subtitle>
                  <Card.Text className='text-muted'>
                    {item.content.slice(0, 150)}...
                  </Card.Text>
                  <Button
                    onClick={() => {
                      navigate(`/news/${item.id}`)
                    }}
                    variant='outline-primary btn-sm'
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default News
