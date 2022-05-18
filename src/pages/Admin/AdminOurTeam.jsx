import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
// useNavigate
import { useNavigate } from 'react-router-dom'
// import Loading Card
import LoadingCard from '../../components/LoadingCard'
// firebase import
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query } from 'firebase/firestore'
import AdminTeamCard from '../../components/AdminTeamCard'
const AdminOurTeam = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // useNavigate
  const navigate = useNavigate()
  // fetch data from firebase
  useEffect(() => {
    setIsLoading(true)
    const collectionRef = collection(db, 'team')
    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setIsLoading(false)
    }

    getUsers()
  }, [])
  return (
    <div>
      <h1>Our Team</h1>
      <p className='lead'>You can add, edit, and delete team members here. </p>
      <hr />
      <Button
        onClick={() => navigate('/admin/team/add')}
        variant='primary'
        size='sm'
      >
        Add a member
      </Button>
      <div className='row my-4'>
        {isLoading ? (
          <LoadingCard />
        ) : (
          firebaseData.map((item, index) => (
            <AdminTeamCard
              firebaseData={firebaseData}
              setFirebaseData={setFirebaseData}
              item={item}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default AdminOurTeam
