import React, { useEffect, useState } from "react"
import { PiCaretCircleLeftLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { IoCloseSharp } from "react-icons/io5"
import { db } from "../../../../../firebase/firebase-config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import useGetAlbums from "../../../../../helpers/hooks/useGetAlbums"
import RemoveAlbumModal from "./RemoveAlbumModal"

const AddAlbum = () => {
  const [albums, setAlbums] = useState([])
  const [albumInput, setAlbumInput] = useState("")
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedId, setSelectedId] = useState("")
  const collectionRef = collection(db, "albums")
  const { firebaseData } = useGetAlbums()

  useEffect(() => {
    setAlbums(firebaseData)
  }, [firebaseData])

  const handleClose = () => {
    setShow(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (albumInput !== "") {
      setLoading(true)
      const textAndValue = {
        text: albumInput,
        value: albumInput.toLowerCase().split(" ").join("-"),
      }
      try {
        addDoc(collectionRef, {
          text: albumInput,
          value: albumInput.toLowerCase().split(" ").join("-"),
          timestamp: serverTimestamp(),
        })
        setLoading(false)
        setAlbumInput("")
      } catch (error) {
        console.log(error)
        setLoading(false)
        setAlbumInput("")
      }
      setAlbums([...albums, textAndValue])
    }
  }

  return (
    <main>
      <h3>Add Albums</h3>

      <RemoveAlbumModal
        show={show}
        handleClose={handleClose}
        selectedId={selectedId}
        albums={albums}
        setAlbums={setAlbums}
      />
      <p className="col-7 text-secondary mb-0">You can add albums here</p>
      <div>
        <Link
          to="/admin/gallery/add"
          className="text-primary"
          style={{ textDecoration: "none" }}
        >
          <span className="me-1" style={{ fontSize: "20px" }}>
            <PiCaretCircleLeftLight className="text-primary" />
          </span>
          Back to adding images
        </Link>
      </div>

      <form onSubmit={submitHandler} className="form d-flex gap-1 mt-3">
        <div className="form-group">
          <input
            value={albumInput}
            onChange={(e) => setAlbumInput(e.target.value)}
            className="form-control"
            placeholder="Enter album name"
            type="text"
          />
        </div>
        <button disabled={loading} type="submit" className="btn btn-warning">
          {loading ? "Submitting..." : "Add Album"}
        </button>
      </form>

      <hr />

      <div className="row">
        {albums.map((item, index) => (
          <div
            className="col-xl-3 col-md-4 col-sm-6 p-2"
            style={{ position: "relative" }}
            key={index}
            value={item.value}
          >
            <span
              onClick={() => {
                setSelectedId(item.id)
                setShow(true)
              }}
              className="bg-danger text-white p-1 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50px",
                position: "absolute",
                right: "0",
                top: "-1px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <IoCloseSharp />
            </span>
            <div
              className={` p-3 d-flex justify-content-center text-center fw-bolder border`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AddAlbum
