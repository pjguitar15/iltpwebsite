import React from 'react'
import { Card, Button } from 'react-bootstrap'

const LatestNewsCard = ({ item, navigate }) => {
  return (
    <div data-aos='zoom-in' className='p2 my-3 col-md-6 col-lg-4 rubik-400'>
      <Card>
        <Card.Img
          style={{
            width: '100%',
            height: '12rem',
            objectFit: 'cover',
          }}
          variant='top'
          src={item.img}
        />
        <Card.Body>
          <Card.Title className='font-poppins-500'>{item.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{item.date}</Card.Subtitle>
          <Card.Text className='mb-2 text-muted'>
            {item.content.slice(0, 150)}...
          </Card.Text>
          <Button
            onClick={() => {
              navigate(`/news/${item.id}`)
            }}
            variant='outline-primary btn-sm rubik-400'
          >
            Read more
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LatestNewsCard
