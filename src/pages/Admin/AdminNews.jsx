import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { NewsData } from '../../Data/NewsData.js'
import UpdateNewsModal from './Modals/UpdateNewsModal.jsx'
import './Admin.css'
import AddNewsModal from './Modals/AddNewsModal/AddNewsModal.jsx'
import { db } from '../../firebase/firebase-config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
const AdminNews = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [currentItem, setCurrentItem] = useState({})
  // Loading State
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  // Modal State
  const [updateModalShow, setUpdateModalShow] = useState(false)
  const [addModalShow, setAddModalShow] = useState(false)

  // firebase collection ref
  const collectionRef = collection(db, 'news-articles')

  // fetch data from firebase
  useEffect(() => {
    setIsDataLoaded(true)
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    }
    getData()
    setIsDataLoaded(false)
  }, [])

  // card click handler
  const cardClicked = (itemId, itemTitle, itemImg, itemContent) => {
    setCurrentItem({
      id: itemId,
      title: itemTitle,
      img: itemImg,
      content: itemContent,
    })
    setUpdateModalShow(true)
  }

  // handle delete
  const deleteHandler = () => {
    console.log('delete!')
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
      <Button onClick={addNewsHandler}>Add News</Button>
      <div className='row'>
        {isDataLoaded ? 'Loading' : ''}
        {firebaseData.map((item, index) => (
          <div className='p-2 col-12 col-lg-6 col-xl-4' key={index}>
            <Card
              onClick={() =>
                cardClicked(item.id, item.title, item.img, item.content)
              }
              className='admin-news-card'
              style={{ cursor: 'pointer' }}
            >
              <Card.Img
                style={{ height: '100px', objectFit: 'cover' }}
                variant='top'
                src={item.img}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content.slice(0, 100)}...</Card.Text>
                <Button variant='warning me-1 btn-sm'>Update</Button>
                <Button onClick={deleteHandler} variant='danger btn-sm'>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminNews
