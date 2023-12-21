import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import presidentAward from "../../assets/PVSAimage.png"
import AwardsCarousel from "../../components/AwardsCarousel"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"

const Awards = () => {
  const [index, setIndex] = useState(0)
  const [firebaseData, setFirebaseData] = useState([])
  const [certificates, setCertificates] = useState([])

  const createCertGroups = (data) => {
    const certificates = []
    for (let i = 0; i < data.length; i += 3) {
      const group = {
        cert1: data[i] ? data[i].img : null,
        cert2: data[i + 1] ? data[i + 1].img : null,
        cert3: data[i + 2] ? data[i + 2].img : null,
      }
      certificates.push(group)
    }
    return certificates
  }

  useEffect(() => {
    // firebase collection ref
    const collectionRef = collection(db, "awards")

    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    }
    getData()
  }, [])

  useEffect(() => {
    setCertificates(createCertGroups(firebaseData))
  }, [firebaseData])

  // handle carousel state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div
      className="m-0 text-center awards"
      style={{ paddingTop: "6vh", paddingBottom: "6vh" }}
    >
      <Container>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="col-lg-6 mx-auto"
        >
          <img className="w-100" src={presidentAward} alt="PVSA logo" />
        </div>
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="bebas mt-4 col-lg-4 mx-auto"
          style={{
            borderLeft: "4px solid red",
            borderRight: "4px solid red",
          }}
        >
          ILTP PVSA Award 2015 - 2022
        </h1>
      </Container>
      <AwardsCarousel
        index={index}
        handleSelect={handleSelect}
        certificates={certificates}
      />
    </div>
  )
}

export default Awards
