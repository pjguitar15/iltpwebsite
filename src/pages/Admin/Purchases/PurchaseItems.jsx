import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { db } from '../../../firebase/firebase-config'
import {
  getDocs,
  query,
  orderBy,
  collection,
  updateDoc,
  doc,
} from 'firebase/firestore'

const PurchaseItems = () => {
  const [purchases, setPurchases] = useState([])
  useEffect(() => {
    const collectionRef = collection(db, 'orders')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setPurchases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getData()
  }, [])

  const toggleHandler = async (id) => {
    const userDoc = doc(db, 'orders', id)
    const newFields = { isDelivered: true }
    await updateDoc(userDoc, newFields)
    window.location.reload()
  }
  return (
    <div className='rubik-400'>
      <h4>Purchased Items</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full name</th>
            <th>Contact number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Item(s) Purchased</th>
            <th>Total Amount Paid</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>
                {item.houseNumber}, {item.street}, {item.city}, {item.state}, {item.zipCode}
              </td>
              <td>{item.purchasedItems.length}</td>
              <td>${item.totalPrice}</td>
              <td>
                {item.isDelivered ? (
                  <div className='text-success rubik-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-check-lg me-1'
                      viewBox='0 0 16 16'
                    >
                      <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                    </svg>
                    Item Delivered
                  </div>
                ) : (
                  <Button
                    onClick={() => toggleHandler(item.id)}
                    size='sm'
                    variant='warning'
                  >
                    Deliver Item
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default PurchaseItems
