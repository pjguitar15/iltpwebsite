import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData'
import { useNavigate } from 'react-router-dom'
import './Slug.css'
import 'aos/dist/aos.css'
const NewsSlug = () => {
  const [data] = useState(NewsData)
  let navigate = useNavigate()
  let { id } = useParams()
  // target scroll location
  const startOfImage = useRef(null)

  // function to scroll to specific location
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    scrollToSection(startOfImage)
  }, [id])

  return (
    <div>
      {data
        .filter((item) => item.id === id)
        .map((item, index) => (
          <div key={index} data-aos='fade-down' data-aos-duration='2000'>
            <img className='slug-img' src={item.img} alt='image item' />
            <div
              ref={startOfImage}
              className='py-5 col-11 col-sm-10 col-xl-6 mx-auto'
            >
              <div>
                <div className='col-12 col-lg-10 col-xl-8'>
                  <img
                    className='slug-img-within-container mb-4 rounded'
                    src={item.img}
                    alt='image item'
                  />
                </div>
                <h2
                  className='mb-4 mt-3 text-dark ps-3 text-uppercase'
                  style={{
                    borderLeft: 'solid #00B2B2 5px',
                    letterSpacing: '2px',
                  }}
                >
                  {item.title}
                </h2>
                <p className='text-muted'>{item.date}</p>
                <p
                  style={{
                    color: '#3C3744',
                    textAlign: 'justify',
                    fontWeight: '400',
                  }}
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
