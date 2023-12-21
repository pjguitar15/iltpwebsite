import React, { useState, useEffect, useRef } from "react"
import { Button, Form, Spinner, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import { db } from "../../../../../firebase/firebase-config"
import { addDoc, serverTimestamp, collection } from "firebase/firestore"
// image compression package
import imageCompression from "browser-image-compression"
import UploadAgainModal from "../../../../../components/UploadAgainModal"
import { IoMdAdd } from "react-icons/io"
import { PiCaretCircleLeftLight } from "react-icons/pi"
import useGetAlbums from "../../../../../helpers/hooks/useGetAlbums"
import { ProgressBar } from "react-bootstrap"

const AddVolunteerImages = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [albums, setAlbums] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState("martin-luther-king-day")
  const [selectedYear, setSelectedYear] = useState("2018")
  const [show, setShow] = useState(false)
  const [currentProgress, setCurrentProgress] = useState(0)
  const [overallProgress, setOverallProgress] = useState(0)

  const fileRef = useRef()
  const navigate = useNavigate()
  const collectionRef = collection(db, "photos")
  const { firebaseData } = useGetAlbums()

  useEffect(() => {
    setAlbums(firebaseData)
  }, [firebaseData])

  // Add more photos handler
  const addMorePhotos = () => {
    setShow(false)
    setSelectedImages(null)
    setSubmitLoading(false)
    fileRef.current.value = null
  }

  // Submit handler
  const submitHandler = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)

    const cloudName = "philcob"
    const uploadPreset = "iltp-news-images"

    // Calculate total progress steps based on the number of images
    const totalSteps = selectedImages.length
    let currentStep = 0

    try {
      await Promise.all(
        selectedImages.map(async (image) => {
          const formData = new FormData()
          formData.append("file", image)
          formData.append("upload_preset", uploadPreset)

          try {
            const res = await Axios.post(
              `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
              formData,
              {
                onUploadProgress: (progressEvent) => {
                  // Update progress for the current image
                  const progress = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                  )
                  setCurrentProgress(progress)
                },
              }
            )

            // Add the uploaded image to the database
            await addDoc(collectionRef, {
              img: res.data.url,
              category: selectedAlbum,
              year: selectedYear,
              timestamp: serverTimestamp(),
            })
          } catch (err) {
            console.error(err)
            // Handle error if needed
          } finally {
            // Increase the current step after each image upload
            currentStep++
            setOverallProgress((currentStep / totalSteps) * 100)
          }
        })
      )

      // After all uploads and database updates are done
      setShow(true)
    } catch (err) {
      alert(err)
    } finally {
      setSubmitLoading(false)
      // Reset progress state after completion
      setCurrentProgress(0)
      setOverallProgress(0)
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/gallery/add")
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>Add Images</h3>
      <p className="col-7 text-secondary mb-0">
        You can add, edit, and delete images/albums here
      </p>
      <div>
        <Link
          to="/admin/gallery"
          className="text-primary"
          style={{ textDecoration: "none" }}
        >
          <span className="me-1" style={{ fontSize: "20px" }}>
            <PiCaretCircleLeftLight className="text-primary" />
          </span>
          Return to Gallery
        </Link>
      </div>

      {/* <UploadAgainModal
        show={show}
        setShow={setShow}
        setSubmitLoading={setSubmitLoading}
        addMorePhotos={addMorePhotos}
      /> */}
      <Form
        onSubmit={submitHandler}
        className="mx-auto bg-light p-5 border mt-3"
      >
        {/* Image */}
        <Form.Group className="my-2">
          <Form.Text className="mb-1">Upload an image</Form.Text>
          <Form.Control
            ref={fileRef}
            disabled={submitLoading}
            onChange={async (e) => {
              const imageFiles = e.target.files

              const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
              }

              try {
                const compressedFiles = await Promise.all(
                  Array.from(imageFiles).map(async (file) => {
                    return await imageCompression(file, options)
                  })
                )

                setSelectedImages(compressedFiles)
              } catch (error) {
                console.log(error)
              }
            }}
            required
            type="file"
            multiple // Enable multiple file selection
          />
          {selectedImages.length > 0 && (
            <div>
              <div className="d-flex flex-wrap">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Preview-${index}`}
                    className="img-thumbnail m-2"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Form.Group>

        <div className="row">
          <Form.Text>Which album does this photo belongs?</Form.Text>
          {albums.map((item, index) => (
            <div
              onClick={() => setSelectedAlbum(item.value)}
              className="col-xl-3 col-md-4 col-sm-6 p-2"
              key={index}
              value={item.value}
            >
              <div
                className={`${
                  selectedAlbum === item.value
                    ? "bg-primary text-white shadow"
                    : "border bg-white "
                } p-3 d-flex justify-content-center text-center fw-bolder rounded`}
                style={{ cursor: "pointer", transition: "300ms" }}
              >
                {item.text}
              </div>
            </div>
          ))}
          <div
            className="col-lg-3 col-md-4 col-sm-6 p-2"
            onClick={() => {
              navigate("/admin/gallery/album/add")
            }}
          >
            <div
              className={`p-3 d-flex justify-content-center align-items-center text-center rounded text-secondary`}
              style={{
                cursor: "pointer",
                transition: "300ms",
                border: "solid 1px lightgray",
                borderStyle: "dashed",
              }}
            >
              <IoMdAdd className="me-1" />
              Add/Remove albums
            </div>
          </div>
        </div>

        <Form.Group className="mt-2">
          <Form.Text>Select Year</Form.Text>
          <Form.Select onChange={(e) => setSelectedYear(e.target.value)}>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </Form.Select>
        </Form.Group>

        {currentProgress > 0 && (
          <ProgressBar
            animated
            now={currentProgress}
            label={`${currentProgress}%`}
          />
        )}

        {overallProgress > 0 && overallProgress < 100 && (
          <ProgressBar
            animated
            now={overallProgress}
            label={`${overallProgress}%`}
          />
        )}

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <Form.Group className="mt-3">
            <Button
              size="sm"
              variant="warning"
              className="me-1"
              disabled={submitLoading}
              type="submit"
            >
              {submitLoading ? (
                <>
                  <Spinner animation="border" variant="light me-2" size="sm" />
                  Loading please wait...
                </>
              ) : (
                "Add Image"
              )}
            </Button>
          </Form.Group>
        </div>
      </Form>
    </>
  )
}

export default AddVolunteerImages
