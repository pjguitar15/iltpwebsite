import React from 'react'
import { Button, Card } from 'react-bootstrap'

const FeaturedNewsCard = ({ item, navigate }) => {
  return (
    <div data-aos='zoom-in' className='col-md-6 col-lg-6 my-2 px-3'>
      <Card className='rounded-0 border-0'>
        <Card.Img
          style={{
            width: '100%',
            height: '15vw',
            objectFit: 'cover',
          }}
          variant='top'
          src={item.img}
          className='rounded-0'
        />
        <Card.Body className='px-0'>
          <Card.Title className='mb-3'>{item.title}</Card.Title>
          <Card.Subtitle className='mb-3 text-muted'>{item.date}</Card.Subtitle>
          <Card.Text className='text-muted'>
            {item.content.slice(0, 150)}...
          </Card.Text>
          <Button
            onClick={() => {
              navigate(`/news/${item.id}`)
            }}
            variant='outline-primary btn-sm mt-2'
          >
            Read more
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FeaturedNewsCard
