import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import '../styles/AboutUs.css'
import { OurTeamData } from '../../Data/OurTeamData'
import 'aos/dist/aos.css'
import OurTeamCard from '../../components/OurTeamCard'
// firebase import
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'
const OurTeam = () => {
  const [data] = useState(OurTeamData)
  const [firebaseData, setFirebaseData] = useState([])
  // fetch data from firebase
  useEffect(() => {
    const collectionRef = collection(db, 'team')
    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])
  return (
    <div>
      <div className='bg-dark py-5'>
        <h1 className='text-white bebas m-0 p-0 text-center'>Our Team</h1>
        <p className='text-white lead text-center col-lg-4 mx-auto'>
          ILTP is made up of passionate young people from different nations that
          practices the culture of heart
        </p>
      </div>
      <Container className='py-5' style={{ marginTop: '60px' }}>
        <div className='row'>
          {/* displys only position that contains chairman */}
          {firebaseData
            .filter((item) => item.position.toLowerCase().includes('chairman'))
            .map((item, index) => (
              <OurTeamCard key={index} item={item} />
            ))}

          {/* only displays the item that has coordinator in the position name */}
          {firebaseData
            .filter((item) =>
              item.position.toLowerCase().includes('coordinator')
            )
            .map((item, index) => (
              <OurTeamCard key={index} item={item} />
            ))}
          {/* Rest of the members here */}
          {firebaseData
            .filter(
              (item) =>
                !(
                  item.position.toLowerCase().includes('coordinator') ||
                  item.position.toLowerCase().includes('chairman')
                )
            )
            .map((item, index) => (
              <OurTeamCard key={index} item={item} />
            ))}
        </div>
      </Container>
    </div>
  )
}

export default OurTeam
