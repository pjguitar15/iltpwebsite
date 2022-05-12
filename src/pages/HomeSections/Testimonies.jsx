import React, { useState, useEffect } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import '../styles/Home.css'

// Firebase import
import { db } from '../../firebase/firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'

// Datas
import { TestimoniesData } from '../../Data/TestimoniesData'

// animate on scroll
import 'aos/dist/aos.css'

const Testimonies = () => {
  const [index, setIndex] = useState(0)
  const [testimonyData, setTestimonyData] = useState([])
  // Firebase collection reference
  const collectionRef = collection(db, 'testimonies')

  // Fetch data from firebase
  useEffect(() => {
    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      setTestimonyData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
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
          <Carousel
            variant='dark'
            className='pb-5'
            activeIndex={index}
            onSelect={handleSelect}
          >
            {testimonyData.map((item, index) => (
              <Carousel.Item interval={1500} key={index}>
                <p className='lead col-md-10 mx-auto col-lg-9 mb-4'>
                  {item.content}
                </p>
                <div className='col-2 mx-auto my-2'>
                  <img
                    style={{
                      borderRadius: '50%',
                      height: '100px',
                      width: '100px',
                    }}
                    src={item.img}
                    alt=''
                  />
                </div>
                <div className='testimony-person mt-4 bg-light mx-auto'>
                  <div className='m-0 bg-success text-white bebas'>
                    {item.name}
                  </div>
                  <p className='m-0 py-2 bg-light'>Batch {item.batchYear}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  )
}

export default Testimonies
