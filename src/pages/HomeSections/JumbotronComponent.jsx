import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/Home.css'
import { JumbotronImageUrls } from '../../Data/JumbotronImageUrls'
import { useNavigate } from 'react-router-dom'
import PillButton from '../../components/PillButton'
import { FaDonate } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'

// Firebase import
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'

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
              <h1 className='jumbo-header col-md-7 col-xl-6 font-poppins-500'>
                {isLoading ? (
                  <span>Impacting Lives Towards Peace</span>
                ) : (
                  firebaseData.map((item, index) => (
                    <span key={index}>{item.title}</span>
                  ))
                )}
              </h1>
              <p className='col-md-10 col-lg-7 lead jumbo-paragraph'>
                {isLoading ? (
                  <span>
                    We empower you with everything you need to be a successful
                    and insightful leader. Develop the abilities and build a
                    strong foundation as someone who can leader the community.
                  </span>
                ) : (
                  firebaseData.map((item, index) => (
                    <span className='font-poppins-300' key={index}>
                      {item.content}
                    </span>
                  ))
                )}
              </p>
              <p className='d-flex'>
                <PillButton
                  primaryColor='#198754'
                  secondaryColor='#1b945b'
                  textColor='#ffffff'
                  handleClick={() => navigate('/support')}
                >
                  <FaDonate className='me-2' style={{ fontSize: '18px' }} />
                  Donate
                </PillButton>

                {/* <PillButton
                  primaryColor='#198754'
                  secondaryColor='#1b945b'
                  textColor='#ffffff'
                  handleClick={() => navigate('/contact')}
                >
                  Join
                </PillButton> */}

                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    background: 'white',
                    border: 'none',
                    padding: '9px 18px',
                    color: '#198754',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '15px',
                  }}
                  className='font-poppins-500 jumbo-contact-btn'
                >
                  <FaPhone className='me-2' />
                  Contact
                </button>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default JumbotronComponent
