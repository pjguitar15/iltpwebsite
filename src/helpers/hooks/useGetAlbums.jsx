import { useEffect, useState } from "react"
import { query, orderBy, getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"

const useGetAlbums = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const collectionRef = collection(db, "albums")
  useEffect(() => {
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
  return { firebaseData }
}

export default useGetAlbums
