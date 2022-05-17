import React, { useState, useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import '../styles/Home.css'
import { JumbotronImageUrls } from '../../Data/JumbotronImageUrls'
import { useNavigate } from 'react-router-dom'

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

// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

const JumbotronComponent = () => {
  const [index, setIndex] = useState(0)
  const [firebaseData, setFirebaseData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // useNavigate
  const navigate = useNavigate()

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  // fetch data from firebase
  useEffect(() => {
    setIsLoading(true)
    const collectionRef = collection(db, 'jumbotron-section')
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setIsLoading(false)
    }

    getData()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <Carousel
        data-aos='fade-down'
        data-aos-duration='1000'
        className='text-light jumbotron m-0 d-flex align-items-center justify-content-center flex-column'
        activeIndex={index}
        onSelect={handleSelect}
        pause='false'
      >
        {JumbotronImageUrls.map((item, index) => (
          <Carousel.Item interval={6000} key={index}>
            <div style={{ height: '100vh' }}>
              <img
                style={{ filter: 'brightness(40%)' }}
                className='d-block w-100 h-100 moving-img'
                src={item.img}
                alt='First slide'
              />
            </div>
            <Carousel.Caption className='text-start'>
              <h1 className='jumbo-header col-md-7 col-xl-6'>
                {isLoading ? (
                  <span>Impacting Lives Towards Peace</span>
                ) : (
                  firebaseData.map((item, index) => <span>{item.title}</span>)
                )}
              </h1>
              <p
                className='col-md-6'
                style={{ fontSize: '23px', fontWeight: '100' }}
              >
                {isLoading ? (
                  <span>
                    We empower you with everything you need to be a successful
                    and insightful leader. Develop the abilities and build a
                    strong foundation as someone who can leader the community.
                  </span>
                ) : (
                  firebaseData.map((item, index) => <span>{item.content}</span>)
                )}
              </p>
              <p>
                <Button
                  onClick={() => navigate('/fundraising')}
                  variant='success px-4 me-3'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-piggy-bank-fill me-2'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
                  </svg>
                  Donate
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  variant='success mx-2 px-4'
                >
                  Join
                </Button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default JumbotronComponent
