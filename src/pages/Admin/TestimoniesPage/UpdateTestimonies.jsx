import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { db } from '../../../firebase/firebase-config'
import { collection, getDocs, updateDoc, doc, query } from 'firebase/firestore'
import UpdateTestimonyForm from '../../../components/UpdateTestimonyForm'
const UpdateTestimonies = () => {
  const [currItem, setCurrItem] = useState([{}])
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    // fetch data from firebase
    const collectionRef = collection(db, 'testimonies')

    const q = query(collectionRef)
    const getUsers = async () => {
      const data = await getDocs(q)
      const allItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setCurrItem(allItems.filter((element) => element.id === id))
    }
    getUsers()
  }, [])

  // Update Handler
  const updateHandler = async () => {
    const userDoc = doc(db, 'testimonies', currItem[0].id)
    const newFields = {
      name: currItem[0].name,
      batchYear: currItem[0].batchYear,
      content: currItem[0].content,
    }
    await updateDoc(userDoc, newFields)
    alert('Update success!')
    navigate('/admin/testimonies')
  }

  return (
    <div>
      <div className='p-5'>
        <Container>
          <UpdateTestimonyForm
            updateHandler={updateHandler}
            currItem={currItem}
            setCurrItem={setCurrItem}
            navigate={navigate}
          />
        </Container>
      </div>
    </div>
  )
}
export default UpdateTestimonies
