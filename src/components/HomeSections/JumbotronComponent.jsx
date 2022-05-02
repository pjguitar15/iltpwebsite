import React, { useState, useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import '../styles/Home.css'
import { JumbotronImageUrls } from '../../Data/JumbotronImageUrls'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const JumbotronComponent = () => {
  const [index, setIndex] = useState(0)

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      
      <Carousel
        data-aos='fade-down'
        data-aos-duration='1000'
        className='w-auto text-light jumbotron m-0 d-flex align-items-center justify-content-center flex-column'
        activeIndex={index}
        onSelect={handleSelect}
        pause='false'
      >
        {JumbotronImageUrls.map((item, index) => (
          <Carousel.Item interval={6000} key={index}>
            <img
              style={{ filter: 'brightness(40%)' }}
              className='d-block w-100 moving-img'
              src={item.img}
              alt='First slide'
            />
            <Carousel.Caption className='text-start'>
              <h1 className='jumbo-header'>Impacting Lives</h1>
              <h1 className='jumbo-header'>Towards Peace</h1>
              <p className='col-md-6 lead'>
                We empower you with everything you need to be a successful and
                insightful leader. Develop the abilities and build a strong
                foundation as someone who can leader the community.
              </p>
              <p>
                <Button variant='success px-4 me-3'>Donate</Button>
                <Button variant='success mx-2 px-4'>Join</Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <Container>
        <h1 className='jumbo-header'>Impacting Lives</h1>
        <h1 className='jumbo-header'>Towards Peace</h1>
        <p className='col-md-6 lead'>
          We empower you with everything you need to be a successful and
          insightful leader. Develop the abilities and build a strong foundation
          as someone who can leader the community.
        </p>

        <p>
          <Button variant='success px-4 me-3'>Donate</Button>
          <Button variant='success mx-2 px-4'>Join</Button>
        </p>
      </Container> */}
    </div>
  )
}

export default JumbotronComponent
