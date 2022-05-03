import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData'
import { useNavigate } from 'react-router-dom'
import './Slug.css'
const NewsSlug = () => {
  const [data] = useState(NewsData)
  let navigate = useNavigate()
  let { id } = useParams()

  return (
    <div>
      {data
        .filter((item) => item.id === id)
        .map((item, index) => (
          <div key={index}>
            <img className='slug-img' src={item.img} alt='image item' />
            <div className='py-5 col-11 col-sm-10 col-xl-7 mx-auto'>
              <div>
                <div className='col-12 col-lg-10 col-xl-8'>
                  <img
                    className='slug-img-within-container mb-4 rounded'
                    src={item.img}
                    alt='image item'
                  />
                </div>
                <h1>{item.title}</h1>
                <p className='text-muted'>{item.date}</p>
                <p
                  style={{ color: '#696969', textAlign: 'justify' }}
                  className='slug-content mt-2'
                >
                  {item.content}
                </p>
                <h6>News Type: {item.newsType}</h6>
                <Button
                  onClick={() => {
                    navigate('/news')
                  }}
                  variant='outline-dark mb-5 mt-4'
                >
                  Back to News
                </Button>
              </div>
            </div>
          </div>
        ))}
      <hr className='mt-5' />
    </div>
  )
}

export default NewsSlug
