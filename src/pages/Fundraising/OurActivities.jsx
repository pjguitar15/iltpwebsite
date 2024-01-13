import React, { useState, useEffect, useRef } from 'react'
import { db } from '../../firebase/firebase-config'
import { query, orderBy, getDocs, collection } from 'firebase/firestore'
import { Button, Form, Spinner } from 'react-bootstrap'
import './OurActivities.css'
import useGetAlbums from '../../helpers/hooks/useGetAlbums'

const OurActivities = () => {
  const [allPhotos, setAllPhotos] = useState([])
  const [imageLoading, setImageLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedOptionValue, setSelectedOptionValue] =
    useState('fall-workshop')
  const [selectedOptionName, setSelectedOptionName] = useState('Fall Workshop')
  const [filteredData, setFilteredData] = useState([])
  const imgTopRef = useRef()

  const { firebaseData } = useGetAlbums()

  useEffect(() => {
    if (firebaseData.length > 0) {
      // setSelectedOptionValue(firebaseData[0].value)
      // selectedOptionName(firebaseData[0].text)
    }
  }, [firebaseData])

  useEffect(() => {
    const collectionRef = collection(db, 'photos')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setAllPhotos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  useEffect(() => {
    const splitString = selectedOptionValue.split('-')
    const joinString = splitString.join(' ')
    setSelectedOptionName(joinString)
  }, [selectedOptionValue])

  useEffect(() => {
    setImageLoading(true)
    const filtered = allPhotos.filter(
      (item) =>
        item.year === selectedYear && item.category === selectedOptionValue
    )
    setFilteredData(filtered)
    setTimeout(() => setImageLoading(false), 1000)
  }, [allPhotos, selectedYear, selectedOptionValue])
  return (
    <div className='py-5 bg-waning' ref={imgTopRef}>
      <h3 className='mb-4'>Gallery</h3>
      <hr />
      <p className='mb-3'>
        <Button
          onClick={() => setSelectedYear('2018')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2018' ? 'year-selected' : 'border-0'
          }`}
          size='sm'
          style={{ background: 'none' }}
        >
          2018
        </Button>
        <Button
          onClick={() => setSelectedYear('2019')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2019' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2019
        </Button>
        <Button
          onClick={() => setSelectedYear('2020')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2020' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2020
        </Button>
        <Button
          onClick={() => setSelectedYear('2021')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2021' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2021
        </Button>
        <Button
          onClick={() => setSelectedYear('2022')}
          className={`me-2 fw-bolder text-dark shadow-none year  ${
            selectedYear === '2022' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2022
        </Button>
        <Button
          onClick={() => setSelectedYear('2023')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2023' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2023
        </Button>
        <Button
          onClick={() => setSelectedYear('2024')}
          className={`me-2 fw-bolder text-dark shadow-none year ${
            selectedYear === '2024' ? 'year-selected' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2024
        </Button>
      </p>
      <div className='col-lg-4 col-xl-3 mb-4'>
        <Form.Select onChange={(e) => setSelectedOptionValue(e.target.value)}>
          <option>Fall Workshop</option>
          {firebaseData?.map((item, index) => (
            <option value={item.value}>{item.text}</option>
          ))}
        </Form.Select>
      </div>
      <hr />
      {imageLoading ? (
        <>
          <Spinner animation='grow' variant='success me-2 my-4' size='sm' />
          <Spinner animation='grow' variant='success me-2 my-4' size='sm' />
          <Spinner animation='grow' variant='success me-2 my-4' size='sm' />
        </>
      ) : (
        <>
          <h3 className='mb-4'>
            <span className='text-capitalize'>{selectedOptionName} </span>
            {selectedYear}
          </h3>
          <div className='row' style={{ paddingBottom: '100px' }}>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={index} className='col-lg-4 col-sm-6 pb-4'>
                  <div style={{ height: '13rem' }}>
                    <img
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                      src={item.img}
                      alt=''
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className='text-muted'>
                <h3>No items to show</h3>
              </div>
            )}
            <div className='col-12'>
              <Button
                onClick={() => {
                  imgTopRef.current.scrollIntoView({ behavior: 'smooth' })
                }}
                variant='success'
              >
                Back to top
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default OurActivities
