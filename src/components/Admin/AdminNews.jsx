import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData.js'
import './Admin.css'
const AdminNews = () => {
  const [data] = useState(NewsData)

  // card click handler
  const cardClicked = (id) => {
    console.log('ID ' + id + ' was clicked')
  }

  // handle delete
  const deleteHandler = () => {
    console.log('delete!')
  }

  return (
    <div>
      <h1>Configure News Page</h1>
      <p className='col-7'>Hello Admin! You can add, edit, and delete news</p>
      <Button>Add News</Button>
      <div className='row'>
        {data.map((item, index) => (
          <div className='p-2 col-lg-4' key={index}>
            <Card
              onClick={() => cardClicked(item.id)}
              className='admin-news-card'
              style={{ cursor: 'pointer' }}
            >
              <Card.Img
                style={{ height: '100px', objectFit: 'cover' }}
                variant='top'
                src={item.img}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content.slice(0, 100)}...</Card.Text>
                <Button variant='warning me-1 btn-sm'>Update</Button>
                <Button onClick={deleteHandler} variant='danger btn-sm'>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminNews
