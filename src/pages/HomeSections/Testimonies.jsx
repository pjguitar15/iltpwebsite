import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Home.css'

// Firebase import
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'

// animate on scroll
import 'aos/dist/aos.css'
import TestimonyCarousel from '../../components/TestimonyCarousel'

const Testimonies = () => {
  const [index, setIndex] = useState(0)
  const [testimonyData, setTestimonyData] = useState([])
  // Loading State
  const [loading, setLoading] = useState(false)

  // Fetch data from firebase
  useEffect(() => {
    // Firebase collection reference
    const collectionRef = collection(db, 'testimonies')

    setLoading(true)
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setTestimonyData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    }

    getData()
  }, [])

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div className=' m-0'>
      <div data-aos='flip-up' className='testimony-img m-0'></div>
      <div className='testimonies bg-white'>
        <Container
          data-aos='zoom-in'
          data-aos-duration='500'
          className='text-center '
        >
          <h1 className='m-0 mb-2'>Testimonies</h1>
          {/* index, handleSelect, loading, testimonyData */}
          <TestimonyCarousel
            index={index}
            handleSelect={handleSelect}
            loading={loading}
            testimonyData={testimonyData}
          />
        </Container>
      </div>
    </div>
  )
}

export default Testimonies
