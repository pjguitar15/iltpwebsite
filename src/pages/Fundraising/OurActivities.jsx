import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase-config'
import { query, orderBy, getDocs, collection } from 'firebase/firestore'
import { Button } from 'react-bootstrap'

const OurActivities = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [albumNames, setAlbumNames] = useState([])
  useEffect(() => {
    const collectionRef = collection(db, 'volunteer-images')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  useEffect(() => {
    const collectionRef = collection(db, 'volunteer-albums')
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setAlbumNames(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])
  return (
    <div className='py-5 bg-waning'>
      <h1 className='display-6 mb-4 text-center'>Gallery</h1>
      <div className='row'>
        {albumNames.map((albumNameItem, index) => (
          <>
            <h3 key={index}>{albumNameItem.name}</h3>
            <hr />
            {firebaseData
              .filter((el) => el.album === albumNameItem.name)
              .map((item, index) => (
                <div key={index} className='col-xl-3 col-md-6 col-12 p-2 mb-5'>
                  <div style={{ height: '14rem' }}>
                    <img
                      src={item.img}
                      className='w-100 h-100'
                      alt='activity'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            {/* <div className='row'>
              <div className='col-12 col-lg-6'>
                <Button
                  onClick={() =>
                    alert('sorry, im still working on this part ^^`')
                  }
                  variant='outline-success'
                  className='mb-5'
                >
                  View more photos on <strong>{albumNameItem.name}</strong>{' '}
                  album
                </Button>
              </div>
            </div> */}
          </>
        ))}
      </div>
    </div>
  )
}

export default OurActivities
