import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  collection,
  orderBy,
  query,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'

export const VolunteerActivities = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [volunteerImages, setVolunteerImages] = useState([])
  const [volunteerAlbums, setVolunteerAlbums] = useState([])
  const [show, setShow] = useState(false)
  const [isMouseEntered, setIsMouseEntered] = useState('')
  const [currentDeleteItem, setCurrentDeleteItem] = useState()
  const [selectedVolunteerAlbum, setSelectedVolunteerAlbum] = useState('all')
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    setIsLoading(true)
    const collectionRef = collection(db, 'volunteer-images')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setVolunteerImages(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
      setIsLoading(false)
    }
    getData()
  }, [])

  useEffect(() => {
    const collectionRef = collection(db, 'volunteer-albums')
    const q = query(collectionRef)
    const getData = async () => {
      const data = await getDocs(q)
      setVolunteerAlbums(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    }

    getData()
  }, [])

  // handle image display when Form select state is changed
  useEffect(() => {}, [selectedVolunteerAlbum])

  // handle modal close
  const handleClose = () => {
    setShow(false)
  }

  // delete handler
  const deleteHandler = async () => {
    const userDoc = doc(db, 'volunteer-images', currentDeleteItem)
    await deleteDoc(userDoc)

    // realtime effect
    setVolunteerImages(
      volunteerImages.filter((item) => item.id !== currentDeleteItem)
    )

    setShow(false)
  }

  const openModalAndSetDeleteId = (id) => {
    setCurrentDeleteItem(id)
    setShow(true)
  }
  return (
    <div>
      {/* All images */}
      <div className='row m-0' style={{ height: '100vh' }}>
        <div className='col-12 col-md-5 col-lg-3 bg-dark pt-4 text-center px-0'>
          {/* Navigation */}
          <AdminNav location={location} />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete item</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='danger' onClick={deleteHandler}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className='col-12 col-md-7 col-lg-9 p-5'>
          {location.pathname.slice(7) === 'volunteers' ? (
            //   update images here
            <>
              <h3 className='text-dark'>Configure Volunteer Images</h3>
              <hr />
              <Button
                onClick={() => navigate('/admin/volunteers/add')}
                size='sm'
              >
                Add an image
              </Button>
              {/* Album selector */}
              <div className='col-lg-3 mt-3'>
                <Form.Select
                  onChange={(e) => setSelectedVolunteerAlbum(e.target.value)}
                >
                  <option value='all'>All</option>
                  {volunteerAlbums.map((item, index) => (
                    <option
                      key={index}
                      value={index.name}
                      className='text-capitalize'
                    >
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {isLoading ? (
                <div className='text-center'>
                  <Spinner
                    style={{ height: '7rem', width: '7rem' }}
                    className='text-center'
                    size='xl'
                    animation='border'
                  />
                </div>
              ) : (
                <>
                  <div className='row py-4'>
                    {selectedVolunteerAlbum === 'all'
                      ? volunteerImages.map((item, index) => (
                          <div
                            key={index}
                            className='p-2 col-lg-3'
                            onMouseEnter={() => setIsMouseEntered(item.id)}
                            onMouseLeave={() => setIsMouseEntered('')}
                          >
                            <div
                              className='position-relative bg-dark'
                              style={{ height: '10rem' }}
                            >
                              <img
                                style={
                                  isMouseEntered === item.id
                                    ? { opacity: '.3', objectFit: 'cover' }
                                    : { objectFit: 'cover' }
                                }
                                className='w-100 h-100'
                                src={item.img}
                                alt='test'
                              />
                              <Button
                                onClick={() => {
                                  openModalAndSetDeleteId(item.id)
                                }}
                                style={{
                                  bottom: '0',
                                  right: '0',
                                  top: '0',
                                  left: '0',
                                  margin: 'auto',
                                  background: 'none',
                                }}
                                className={`position-absolute ${
                                  isMouseEntered === item.id
                                    ? 'd-block'
                                    : 'd-none'
                                }`}
                                variant='danger'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='24'
                                  height='24'
                                  fill='red'
                                  class='bi bi-trash3-fill'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z' />
                                </svg>
                              </Button>
                            </div>
                          </div>
                        ))
                      : volunteerImages
                          .filter(
                            (item) => item.album === selectedVolunteerAlbum
                          )
                          .map((item, index) => (
                            <div
                              key={index}
                              className='p-2 col-lg-3'
                              onMouseEnter={() => setIsMouseEntered(item.id)}
                              onMouseLeave={() => setIsMouseEntered('')}
                            >
                              <div
                                className='position-relative bg-dark'
                                style={{ height: '10rem' }}
                              >
                                <img
                                  style={
                                    isMouseEntered === item.id
                                      ? { opacity: '.3', objectFit: 'cover' }
                                      : { objectFit: 'cover' }
                                  }
                                  className='w-100 h-100'
                                  src={item.img}
                                  alt='test'
                                />
                                <Button
                                  onClick={() => {
                                    openModalAndSetDeleteId(item.id)
                                  }}
                                  style={{
                                    bottom: '0',
                                    right: '0',
                                    top: '0',
                                    left: '0',
                                    margin: 'auto',
                                    background: 'none',
                                  }}
                                  className={`position-absolute ${
                                    isMouseEntered === item.id
                                      ? 'd-block'
                                      : 'd-none'
                                  }`}
                                  variant='danger'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    fill='red'
                                    class='bi bi-trash3-fill'
                                    viewBox='0 0 16 16'
                                  >
                                    <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z' />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          ))}
                  </div>{' '}
                </>
              )}
              {/* display all images with x mark on top right */}

              {/* end here */}
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
