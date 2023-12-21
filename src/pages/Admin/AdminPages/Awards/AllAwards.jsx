import React, { useEffect, useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../../../../firebase/firebase-config"
import { Placeholder } from "react-bootstrap/esm"
import DeleteModal from "./DeleteModal"

const AllAwards = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [firebaseData, setFirebaseData] = useState([])
  const [show, setShow] = useState(false)
  const [selectedId, setSelectedId] = useState("")

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    // firebase collection ref
    const collectionRef = collection(db, "awards")

    setIsLoading(true)
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )

      setIsLoading(false)
    }
    getData()
  }, [])
  return (
    <div className="row">
      {isLoading ? (
        <div className="row">
          {Array.from({ length: 12 }).map((item) => (
            <div key={item} className="col-md-4 col-lg-3">
              <Placeholder animation="glow">
                <Placeholder xs={12} style={{ height: "70px" }} />
              </Placeholder>
            </div>
          ))}
        </div>
      ) : (
        <>
          {firebaseData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 p-0">
              <div className="p-2 position-relative">
                <IoCloseCircleOutline
                  onClick={() => {
                    setSelectedId(item.id)
                    setShow(true)
                  }}
                  className="io-close"
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontSize: "22px",
                    color: "red",
                  }}
                />

                <img
                  className="border w-100"
                  src={item.img}
                  alt="award certificate"
                />
              </div>
            </div>
          ))}
        </>
      )}
      <DeleteModal
        show={show}
        handleClose={handleClose}
        selectedId={selectedId}
        firebaseData={firebaseData}
        setFirebaseData={setFirebaseData}
      />
    </div>
  )
}

export default AllAwards
