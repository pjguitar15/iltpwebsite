import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { db } from '../../../../firebase/firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import Axios from 'axios'
import AddNewsForm from './AddNewsForm'
import { ToastContainer, toast } from 'react-toastify'
import useMultipleImagesUploader from '../../../../helpers/hooks/useMultipleImagesUploader'

const AddNewsModal = ({
  setAddModalShow,
  addModalShow,
  firebaseData,
  setFirebaseData,
}) => {
  const [titleInput, setTitleInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [content2Input, setContent2Input] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const [imageSelected, setImageSelected] = useState()
  const [selectValue, setSelectValue] = useState('')
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null)
  const [multipleImagePreview, setMultipleImagePreview] = useState(null)
  const [isTitleConfirmed, setIsTitleConfirmed] = useState(false)
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false)
  const [isDateConfirmed, setIsDateConfirmed] = useState(false)
  const [isNewsTypeConfirmed, setIsNewsTypeConfirmed] = useState(false)
  const [images, setImages] = useState([])
  const multipleImageRef = useRef(null)
  const { uploadImages } = useMultipleImagesUploader()

  useEffect(() => {
    if (images.length > 10) {
      toast.error(`You can only add up to 10 photos.`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })

      multipleImageRef.current.value = null
    }
  }, [images])

  // connect to collections
  const collectionRef = collection(db, 'news-articles')

  const uploadMultipleImages = async (images) => {
    const results = await uploadImages(images)

    if (results) {
      return results
    }
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)
    const result = await uploadMultipleImages(images)
    const imgUrls = result.map((item) => item.url)

    // upload image
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'iltp-news-images')

    Axios.post(`https://api.cloudinary.com/v1_1/philcob/image/upload`, formData)
      .then((res) => {
        addDoc(collectionRef, {
          title: titleInput,
          date: dateInput,
          content: contentInput,
          img: res.data.url,
          location: locationInput,
          newsType: selectValue,
          multipleImages: imgUrls,
          secondaryContent: content2Input,
          show: true,
          timestamp: serverTimestamp(),
        })
        // fake add to array
        setFirebaseData([
          {
            title: titleInput,
            location: locationInput,
            date: dateInput,
            content: contentInput,
            img: res.data.url,
            newsType: selectValue,
            show: true,
            timestamp: serverTimestamp(),
          },
          ...firebaseData,
        ])
      })
      .then(() => {
        // Add React State Realtime Effect here
        setSubmitLoading(false)
        setAddModalShow(false)

        // set to emptry string onSubmit
        setTitleInput('')
        setDateInput('')
        setContentInput('')
        setContent2Input('')
        setLocationInput('')
        setMultipleImagePreview(null)
        setFeaturedImagePreview(null)
        setIsTitleConfirmed(false)
        setIsLocationConfirmed(false)
        setIsDateConfirmed(false)
        setIsNewsTypeConfirmed(false)

        toast.success(`Your new post has been uploaded successfully.`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error(
          'There was an error while uploading your news. Please contact your developer.',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          }
        )
      })
  }

  return (
    <div>
      <ToastContainer />
      <Modal
        className='m-0 add-news-modal'
        // style={{ width: "100% !important" }}
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <AddNewsForm
            handleSubmit={handleSubmit}
            submitLoading={submitLoading}
            setTitleInput={setTitleInput}
            titleInput={titleInput}
            setDateInput={setDateInput}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            dateInput={dateInput}
            setSelectValue={setSelectValue}
            setContentInput={setContentInput}
            contentInput={contentInput}
            setImageSelected={setImageSelected}
            imageSelected={imageSelected}
            content2Input={content2Input}
            setContent2Input={setContent2Input}
            selectValue={selectValue}
            featuredImagePreview={featuredImagePreview}
            setFeaturedImagePreview={setFeaturedImagePreview}
            multipleImagePreview={multipleImagePreview}
            setMultipleImagePreview={setMultipleImagePreview}
            isTitleConfirmed={isTitleConfirmed}
            setIsTitleConfirmed={setIsTitleConfirmed}
            isLocationConfirmed={isLocationConfirmed}
            setIsLocationConfirmed={setIsLocationConfirmed}
            isDateConfirmed={isDateConfirmed}
            setIsDateConfirmed={setIsDateConfirmed}
            isNewsTypeConfirmed={isNewsTypeConfirmed}
            setIsNewsTypeConfirmed={setIsNewsTypeConfirmed}
            setImages={setImages}
            multipleImageRef={multipleImageRef}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddNewsModal
