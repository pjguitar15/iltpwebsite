import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import TestimonyCard from './TestimonyCard'
import LoadingCard from '../../../components/LoadingCard'
// Firebase imports
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'
const AdminTestimonies = () => {
  const [firebaseData, setFirebaseData] = useState([])
  // Loading State
  const [isDataLoading, setIsDataLoading] = useState(false)
  // firebase collection ref
  const collectionRef = collection(db, 'testimonies')
  // fetch data from firebase
  useEffect(() => {
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
