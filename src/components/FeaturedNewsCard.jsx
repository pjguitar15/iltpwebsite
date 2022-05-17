import React from 'react'
import { Button, Card } from 'react-bootstrap'

const FeaturedNewsCard = ({ item, navigate }) => {
  return (
    <div data-aos='zoom-in' className='p2 my-3 col-md-6 col-lg-4'>
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
          <Card.Subtitle className='mb-2 text-muted'>{item.date}</Card.Subtitle>
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
  )
}

export default FeaturedNewsCard
