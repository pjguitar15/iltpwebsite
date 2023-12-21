import React, { useRef, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { PiCaretCircleLeftLight } from "react-icons/pi"
import { db } from "../../../../../firebase/firebase-config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddAwardForm = () => {
  const [loading, setLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const collectionRef = collection(db, "awards")
  const navigate = useNavigate()
  const imgRef = useRef()

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    // You can perform additional actions with the selected image, such as previewing it.
    // For simplicity, we are just updating the state with the selected image file.
    setSelectedImage(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("file", selectedImage)
    formData.append("upload_preset", "iltp-news-images")

    axios
      .post("https://api.cloudinary.com/v1_1/philcob/image/upload", formData)
      .then((res) => {
        try {
          addDoc(collectionRef, {
            img: res.data.url,
            timestamp: serverTimestamp(),
          })
        } catch (error) {
          console.log(error)
        }

        setLoading(false)
        setErrorMessage("")
        console.log("SUCCESS")
        toast.success(`Award has been submitted successfully.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

        setSelectedImage(null)
        imgRef.current.value = ""

        setTimeout(() => {
          navigate("/admin/awards")
        }, 3000)
      })
      .catch((err) => {
        console.log(err.message)
        setErrorMessage("Please select a valid image")
        setLoading(false)
      })
  }

  return (
    <main>
      <ToastContainer />
      <div className="mb-2">
        <Link to="/admin/awards" className="text-primary">
          <span className="me-1" style={{ fontSize: "20px" }}>
            <PiCaretCircleLeftLight className="text-primary" />
          </span>
          Return to Awards
        </Link>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="imageInput">
          <Form.Label>Select an Image</Form.Label>
          <Form.Control
            ref={imgRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}

        <Button disabled={loading} variant="primary mt-2" type="submit">
          {loading ? "Uploading..." : "Submit"}
        </Button>
      </Form>
    </main>
  )
}

export default AddAwardForm
