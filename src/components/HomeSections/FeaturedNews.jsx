import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Carousel } from 'react-bootstrap'
import '../styles/Home.css'
import { NewsData } from '../../Data/NewsData'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeaturedNews = () => {
  const [featuredByThrees, setFeaturedByThrees] = useState([])
  const [newsData, setNewsData] = useState(NewsData)
  const [index, setIndex] = useState(0)

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    Aos.init({ duration: 300 })
  }, [])

  return (
    <div className='featuredNews'>
      <Container>
        <h3 className='text-center mb-5'>Featured News</h3>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item key={index} data-aos='zoom-in'></Carousel.Item>
        </Carousel> */}
        <div className='row'>
          {newsData
            .filter((item) => item.newsType == 'featured')
            .slice(0, 3)
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
                    <Card.Text className='text-muted'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
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
