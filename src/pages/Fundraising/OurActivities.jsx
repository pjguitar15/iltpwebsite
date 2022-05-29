import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase-config'
import { query, orderBy, getDocs, collection } from 'firebase/firestore'

const OurActivities = () => {
  const [firebaseData, setFirebaseData] = useState([])
  useEffect(() => {
    const collectionRef = collection(db, 'volunteer-images')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getUsers = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])
  return (
    <div className='py-5 bg-waning'>
      <h1 className='display-6 mb-4 text-center'>Volunteer Activities</h1>
      <div className='row'>
        {firebaseData.map((item, index) => (
          <div key={index} className='col-xl-4 col-md-6 col-12 p-2'>
            <div style={{ height: '17rem' }}>
              <img
                src={item.img}
                className='w-100 h-100'
                alt='activity'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurActivities
