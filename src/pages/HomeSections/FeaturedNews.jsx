import React, { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import LoadingCard from '../../components/LoadingCard'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
// Firebase imports
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeaturedNews = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)

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

  useEffect(() => {
    Aos.init({ duration: 300 })
  }, [])

  return (
    <div className='featuredNews'>
      <Container>
        <h3 className='text-center mb-5'>Featured News</h3>
        <div className='row'>
          {isDataLoading ? (
            <LoadingCard />
          ) : (
            firebaseData
              .filter((item) => item.newsType === 'featured')
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
              ))
          )}
        </div>
      </Container>
    </div>
  )
}

export default FeaturedNews
