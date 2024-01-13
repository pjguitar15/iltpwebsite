import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import LoadingCard from '../../components/LoadingCard'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
// Firebase imports
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
import FeaturedNewsCard from '../../components/FeaturedNewsCard'

const FeaturedNews = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)

  let navigate = useNavigate()

  // fetch data from firebase
  useEffect(() => {
    // firebase collection ref
    const collectionRef = collection(db, 'news-articles')

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
      setIsDataLoading(false)
    }
    getData()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 300 })
  }, [])

  return (
    <div className='featuredNews'>
      <Container>
        <h3 className='text-center mt-3 mb-5 font-poppins-500'>
          Featured News
        </h3>
        <div className='row'>
          {isDataLoading ? (
            <LoadingCard />
          ) : (
            firebaseData
              .filter((item) => item.newsType === 'featured')
              .slice(0, 2)
              .map((item, index) => (
                <FeaturedNewsCard key={index} item={item} navigate={navigate} />
              ))
          )}
        </div>
      </Container>
    </div>
  )
}

export default FeaturedNews
