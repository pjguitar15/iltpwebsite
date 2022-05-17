import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import UpdateNewsModal from './Modals/UpdateNewsModal.jsx'
import LoadingCard from '../../components/LoadingCard.jsx'
import './Admin.css'
import AddNewsModal from './Modals/AddNewsModal/AddNewsModal.jsx'
import { db } from '../../firebase/firebase-config'
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import AdminNewsCard from '../../components/AdminNewsCard.jsx'
const AdminNews = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  // Loading State
  const [isLoading, setIsLoading] = useState(false)
  // Modal State
  const [updateModalShow, setUpdateModalShow] = useState(false)
  const [addModalShow, setAddModalShow] = useState(false)

  // fetch data from firebase
  useEffect(() => {
    // firebase collection ref
    const collectionRef = collection(db, 'news-articles')

    setIsLoading(true)
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
      setIsLoading(false)
    }
    getData()
  }, [])

  // card click handler
  const openModal = (itemId, itemTitle, itemImg, itemContent, itemDate) => {
    setCurrentItem({
      id: itemId,
      title: itemTitle,
      img: itemImg,
      content: itemContent,
      date: itemDate,
    })
    setUpdateModalShow(true)
  }

  // handle delete
  const deleteHandler = async (id) => {
    const userDoc = doc(db, 'news-articles', id)
    await deleteDoc(userDoc)
    setFirebaseData(firebaseData.filter((element) => element.id !== id))
    alert('Item deleted')
  }

  // add news open modal handler
  const addNewsHandler = () => {
    setAddModalShow(true)
  }

  return (
    <div>
      <UpdateNewsModal
        currentItem={currentItem}
        setUpdateModalShow={setUpdateModalShow}
        updateModalShow={updateModalShow}
      />
      <AddNewsModal
        firebaseData={firebaseData}
        setFirebaseData={setFirebaseData}
        setAddModalShow={setAddModalShow}
        addModalShow={addModalShow}
      />
      <h1>Configure News Page</h1>
      <p className='col-7 lead'>You can add, edit, and delete news here</p>
      <hr />
      <Button size='sm' className='mb-3' onClick={addNewsHandler}>
        Add News
      </Button>
      <div className='row'>
        {isLoading ? (
          <LoadingCard />
        ) : (
          firebaseData.map((item, index) => (
            <AdminNewsCard
              key={index}
              item={item}
              openModal={openModal}
              deleteHandler={deleteHandler}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default AdminNews
