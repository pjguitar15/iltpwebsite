import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './Slug.css'
import 'aos/dist/aos.css'
import LoadingCard from '../../components/LoadingCard'
import Aos from 'aos'
// Firebase imports
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
// Facebook button share library
import { FacebookShareButton, FacebookIcon } from 'react-share'
const NewsSlug = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)
  // const [data] = useState(NewsData)
  let navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

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


  return (
    <div data-aos='fade-down'>
      {isDataLoading
        ? LoadingCard
        : firebaseData
            .filter((item) => item.id === id)
            .map((item, index) => (
              <div key={index}>
                <div className='slug-img-parent'>
                  <img className='slug-img' src={item.img} alt='cover' />
                  <h1 className='news-slug-absolute-text text-uppercase display-2 text-center'>
                    {item.title}
                  </h1>
                </div>

                <div
                  // ref={startOfImage}
                  className='py-5 col-11 col-sm-10 col-xl-6 mx-auto'
                >
                  <div>
                    <div className='col-12 col-lg-10 col-xl-8'>
                      <img
                        className='slug-img-within-container mb-4 rounded'
                        src={item.img}
                        alt='portrait'
                      />
                    </div>
                    <h2
                      className='mb-4 mt-3 text-dark ps-3'
                      style={{
                        borderLeft: 'solid #00B2B2 5px',
                        letterSpacing: '1px',
                      }}
                    >
                      {item.title}
                    </h2>
                    <p className='text-muted opensans-thin'>
                      <i
                        className='bi bi-geo-alt-fill me-2'
                        style={{ color: 'orange', fontSize: '20px' }}
                      ></i>
                      {item.location}
                    </p>
                    <p className='text-muted'>{item.date}</p>
                    <p
                      style={{
                        color: '#6d6d6d',
                        textAlign: 'justify',
                        whiteSpace: 'pre-line',
                      }}
                      className='slug-content mt-2 opensans-thin'
                    >
                      {item.content}
                    </p>
                    <hr />
                    {/* Facebook share button here */}
                    <div>
                      <p className='opensans-thin text-muted'>
                        Share this on Facebook
                      </p>
                      <FacebookShareButton
                        quote={item.title}
                        hashtag='#iltpusa'
                        // url={`iltp2022.netlify.app/news/${item.id}}`}
                        url={`iltp2022.netlify.app`}
                      >
                        <FacebookIcon
                          logoFillColor='black'
                          round={true}
                          size={40}
                        />
                      </FacebookShareButton>
                    </div>
                    <hr />
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
    </div>
  )
}

export default NewsSlug
