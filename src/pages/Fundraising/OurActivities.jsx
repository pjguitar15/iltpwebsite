import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebase-config'
import { query, orderBy, getDocs, collection } from 'firebase/firestore'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Button, Form } from 'react-bootstrap'

const OurActivities = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [selectedYear, setSelectedYear] = useState('2019')
  const [selectedOptionValue, setSelectedOptionValue] =
    useState('winter-workshop')
  const [selectedOptionName, setSelectedOptionName] =
    useState('Winter Workshop')
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    const collectionRef = collection(db, 'photos')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  useEffect(() => {
    const splitString = selectedOptionValue.split('-')
    const joinString = splitString.join(' ')
    setSelectedOptionName(joinString)
  }, [selectedOptionValue])

  useEffect(() => {
    const filtered = firebaseData.filter(
      (item) =>
        item.year === selectedYear && item.category === selectedOptionValue
    )
    setFilteredData(filtered)
  }, [firebaseData, selectedYear, selectedOptionValue])
  return (
    <div className='py-5 bg-waning'>
      <h3 className='mb-4'>Photo Gallery</h3>
      <hr />
      <p className='mb-3'>
        <Button
          onClick={() => setSelectedYear('2018')}
          className={`me-2 fw-bolder text-dark shadow-none ${
            selectedYear === '2018' ? 'border-dark' : 'border-0'
          }`}
          size='sm'
          style={{ background: 'none' }}
        >
          2018
        </Button>
        <Button
          onClick={() => setSelectedYear('2019')}
          className={`me-2 fw-bolder text-dark shadow-none  ${
            selectedYear === '2019' ? 'border-dark' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2019
        </Button>
        <Button
          onClick={() => setSelectedYear('2020')}
          className={`me-2 fw-bolder text-dark shadow-none  ${
            selectedYear === '2020' ? 'border-dark' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2020
        </Button>
        <Button
          onClick={() => setSelectedYear('2021')}
          className={`me-2 fw-bolder text-dark shadow-none  ${
            selectedYear === '2021' ? 'border-dark' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2021
        </Button>
        <Button
          onClick={() => setSelectedYear('2022')}
          className={`me-2 fw-bolder text-dark shadow-none  ${
            selectedYear === '2022' ? 'border-dark' : 'border-0'
          } `}
          size='sm'
          style={{ background: 'none' }}
        >
          2022
        </Button>
      </p>
      <div className='col-2 mb-4'>
        <Form.Select onChange={(e) => setSelectedOptionValue(e.target.value)}>
          <option value='winter-workshop'>Winter Workshop</option>
          <option value='spring-workshop'>Spring Workshop</option>
          <option value='summer-workshop'>Summer Workshop</option>
          <option value='fall-workshop'>Fall Workshop</option>
          <option value='martin-luther-king-day'>Martin Luther King Day</option>
          <option value='global-youth-service-day'>
            Global Youth Service Day
          </option>
          <option value='make-a-difference-day'>Make A Difference Day</option>
          <option value='others'>Others</option>
        </Form.Select>
      </div>
      <hr />
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
      </div>
    </div>
  )
}

export default OurActivities
