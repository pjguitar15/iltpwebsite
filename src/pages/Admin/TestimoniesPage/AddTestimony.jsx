import React, { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TestimonyAddForm from '../../../components/TestimonyAddForm'

const AddTestimony = () => {
  // React State
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  // React Input State
  const [nameInput, setNameInput] = useState('')
  const [batchYearInput, setBatchYearInput] = useState('')
  const [contentInput, setContentInput] = useState('')

  // useNavigate
  let navigate = useNavigate()

  // connect to collections
  const collectionRef = collection(db, 'testimonies')
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin/add-testimony')
    } else {
      navigate('/admin')
    }
  }, [])

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    // upload image
    const formData = new FormData()
    formData.append('file', selectedImage)
    formData.append('upload_preset', 'iltp-news-images')

    Axios.post(`https://api.cloudinary.com/v1_1/philcob/image/upload`, formData)
      .then((res) => {
        addDoc(collectionRef, {
          name: nameInput,
          batchYear: batchYearInput,
          content: contentInput,
          img: res.data.url,
          show: true,
          timestamp: serverTimestamp(),
        })
      })
      .then(() => {
        setSubmitLoading(false)
        alert('Submitted Successfuly! Page will refresh')
        // set to emptry string onSubmit
        setNameInput('')
        setBatchYearInput('')
        setContentInput('')
        // navigate to adminpage
        navigate('/admin/testimonies')
      })
      .catch((err) => {
        alert(err)
      })
  }
  return (
    <div>
      <TestimonyAddForm
        submitHandler={submitHandler}
        submitLoading={submitLoading}
        nameInput={nameInput}
        setNameInput={setNameInput}
        batchYearInput={batchYearInput}
        setBatchYearInput={setBatchYearInput}
        contentInput={contentInput}
        setContentInput={setContentInput}
        setSelectedImage={setSelectedImage}
        navigate={navigate}
      />
    </div>
  )
}

export default AddTestimony
