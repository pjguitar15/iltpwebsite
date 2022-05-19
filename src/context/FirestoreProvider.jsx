import React, { useState, useEffect, useContext } from 'react'
// all firebase imports here
import { db } from '../firebase/firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

// try passing parameters, depending on what collections they're from
export const FirestoreProvider = ({ children }) => {
  // States: News, Testimony, Team
  const [newsData, setNewsData] = useState([])
  const [testimonyData, setTestimonyData] = useState([])
  const [teamData, setTeamData] = useState([])

  // News collection ref
  const newsCollectionRef = collection(db, 'news-articles')
  // Testimony collection ref
  const testimoniesCollectionRef = collection(db, 'testimonies')
  // Jumbotron collection ref
  const jumboCollectionRef = collection(db, 'jumbotron-section')
  // Team collection ref
  const teamCollectionRef = collection(db, 'team')

  // Create
  const createData = async (collectionName) => {
    await addDoc(collectionName, {
      item: 'test',
      timestamp: serverTimestamp(),
    })
  }
  // Read
  useEffect(() => {
    // news
    const newsQuery = query(newsCollectionRef, orderBy('timestamp', 'desc'))
    const getNews = async () => {
      const data = await getDocs(newsQuery)
      setNewsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getNews()

    // testimony
    const testimonyQuery = query(
      testimoniesCollectionRef,
      orderBy('timestamp', 'desc')
    )
    const getTestimony = async () => {
      const data = await getDocs(testimonyQuery)
      setTestimonyData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTestimony()

    // team
    const teamQuery = query(teamCollectionRef)
    const getTeam = async () => {
      const data = await getDocs(teamQuery)
      teamData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTeam()
  }, [])
  
  // Update
  const updateUser = async (id, item) => {
    const userDoc = doc(db, "users", id);
    const newFields = { item: item + 1 };
    await updateDoc(userDoc, newFields);
};
  // Delete
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}
