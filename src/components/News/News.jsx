import React, { useState, useEffect } from 'react'
import { NewsData } from '../../Data/NewsData'
import { Card, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// Firebase imports
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

// animate on scroll
import 'aos/dist/aos.css'

const News = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [data] = useState(NewsData)
  let navigate = useNavigate()
  // firebase collection ref
  const collectionRef = collection(db, 'news-articles')

  // fetch data from firebase
  useEffect(() => {
    setIsDataLoading(true)
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    }
    getData()
    setIsDataLoading(false)
  }, [])
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
          {firebaseData.map((item, index) => (
            <div
              data-aos='zoom-in'
              key={index}
              className='px-4 my-3 col-md-6 col-lg-4'
            >
              <Card className='shadow border-0'>
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
      <hr />
    </>
  )
}

export default News
