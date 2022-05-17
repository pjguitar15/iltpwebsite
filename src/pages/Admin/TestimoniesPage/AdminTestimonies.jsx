import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import TestimonyCard from './AdminTestimonyCard'
import LoadingCard from '../../../components/LoadingCard'
import { useNavigate } from 'react-router-dom'
// Firebase imports
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'
const AdminTestimonies = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)
  // useNavigate
  let navigate = useNavigate()
  // fetch data from firebase
  useEffect(() => {
    // firebase collection ref
    const collectionRef = collection(db, 'testimonies')

    setIsDataLoading(true)
    const q = query(collectionRef)
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
    <div>
      <h1>Testimonies Pages</h1>
      <Button onClick={() => navigate('/adminpage/add-testimony')}>
        New Testimony
      </Button>
      <hr />
      <div className='row'>
        {isDataLoading ? (
          <LoadingCard />
        ) : (
          firebaseData.map((item, index) => (
            <TestimonyCard key={index} item={item} />
          ))
        )}
      </div>
    </div>
  )
}

export default AdminTestimonies
