import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData.js'
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
const AdminNews = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  // Loading State
  const [isLoading, setIsLoading] = useState(false)
  // Modal State
  const [updateModalShow, setUpdateModalShow] = useState(false)
  const [addModalShow, setAddModalShow] = useState(false)

  // firebase collection ref
  const collectionRef = collection(db, 'news-articles')

  // fetch data from firebase
  useEffect(() => {
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
    alert('Item deleted')
    window.location.reload(false)
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
        setAddModalShow={setAddModalShow}
        addModalShow={addModalShow}
      />
      <h1>Configure News Page</h1>
      <p className='col-7'>Hello Admin! You can add, edit, and delete news</p>
      <hr />
      <Button className='mb-3' onClick={addNewsHandler}>
        Add News
      </Button>
      <div className='row'>
        {isLoading ? (
          <LoadingCard />
        ) : (
          firebaseData.map((item, index) => (
            <div className='p-2 col-12 col-lg-6 col-xl-4' key={index}>
              <Card>
                <Card.Img
                  style={{ height: '100px', objectFit: 'cover' }}
                  variant='top'
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content.slice(0, 100)}...</Card.Text>
                  <Button
                    onClick={() =>
                      openModal(
                        item.id,
                        item.title,
                        item.img,
                        item.content,
                        item.date
                      )
                    }
                    variant='warning me-1 btn-sm'
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => deleteHandler(item.id)}
                    variant='danger btn-sm'
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminNews
