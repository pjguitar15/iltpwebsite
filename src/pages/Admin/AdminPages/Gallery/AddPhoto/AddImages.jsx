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

const AddVolunteerImages = () => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState("martin-luther-king-day")
  const [selectedYear, setSelectedYear] = useState("2018")
  const [show, setShow] = useState(false)

  const fileRef = useRef()
  const navigate = useNavigate()
  const collectionRef = collection(db, "photos")

  const albums = [
    {
      text: "Martin Luther King Day",
      value: "martin-luther-king-day",
    },
    {
      text: "Global Youth Service Day",
      value: "global-youth-service-day",
    },
    {
      text: "Make A Difference Day",
      value: "make-a-difference-day",
    },

    {
      text: "Winter Workshop",
      value: "winter-workshop",
    },
    {
      text: "Spring Workshop",
      value: "spring-workshop",
    },
    {
      text: "Summer Workshop",
      value: "summer-workshop",
    },
    {
      text: "Fall Workshop",
      value: "fall-workshop",
    },
  ]

  // Add more photos handler
  const addMorePhotos = () => {
    setShow(false)
    setSelectedImage(null)
    setSubmitLoading(false)
    fileRef.current.value = null
  }

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault()
    // setSubmitLoading(true)
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append("file", selectedImage)
    formData.append("upload_preset", "iltp-news-images")

    const cloudName = "philcob"
    console.log(selectedAlbum)

    // Axios.post(
    //   `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    //   formData
    // )
    //   .then((res) => {
    //     // POST REQUEST 2
    //     // http://res.cloudinary.com/philcob/image/upload/v1654299625/zsellrs9kdtcjryeihxz.jpg
    //     addDoc(collectionRef, {
    //       img: res.data.url,
    //       category: selectedAlbum,
    //       year: selectedYear,
    //       timestamp: serverTimestamp(),
    //     })
    //   })
    //   .then(() => {
    //     // Add React State Realtime Effect here
    //     setShow(true)
    //   })
    //   .catch((err) => {
    //     alert(err)
    //     setSubmitLoading(false)
    //   })
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

      <UploadAgainModal
        show={show}
        setShow={setShow}
        setSubmitLoading={setSubmitLoading}
        addMorePhotos={addMorePhotos}
      />
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
              // const image = e.target.files[0]
              // this doesn't work
              // new Compressor(image, {
              //   quality: 0.1,
              //   success: (compressedResult) => {
              //     // compressedResult has the compressed file.
              //     // Use the compressed file to upload the images to your server.
              //     setSelectedImage(compressedResult)
              //   },
              // })
              // setSelectedImage(image)

              // try another method
              const imageFile = e.target.files[0]

              const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
              }
              try {
                const compressedFile = await imageCompression(
                  imageFile,
                  options
                )
                setSelectedImage(compressedFile)
              } catch (error) {
                console.log(error)
              }
            }}
            required
            type="file"
          />
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
              className={`p-3 d-flex justify-content-center align-items-center text-center rounded`}
              style={{
                cursor: "pointer",
                transition: "300ms",
                border: "solid 1px lightgray",
                borderStyle: "dashed",
              }}
            >
              <IoMdAdd className="me-1" />
              Add
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
