import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import '../styles/Home.css'
import { NewsData } from '../../Data/NewsData'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeaturedNews = () => {
  const [newsData] = useState(NewsData)
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='featuredNews'>
      <Container>
        <h3 className='text-center mb-5'>Latest News</h3>
        <div className='row'>
          {newsData
            .filter((item) => item.newsType === 'latest')
            .map((item, index) => (
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
                    <Card.Text className='mb-2 text-muted'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* test */}
                    <Button variant='outline-primary btn-sm'>Read more</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default FeaturedNews
