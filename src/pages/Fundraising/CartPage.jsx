import React, { useState, useRef, useEffect } from 'react'
import { Container, Button, Modal, Form } from 'react-bootstrap'
import cartBg from '../../assets/cart-bg.jpg'
import { useCart } from '../../context/CartProvider'
import CartListItem from './CartListItem'
import { useNavigate } from 'react-router-dom'
import { PayPalButtons } from '@paypal/react-paypal-js'
import PaymentSuccessModal from './PaymentSuccessModal'
import { v4 as uuidv4 } from 'uuid'
// emailjs
import emailjs from 'emailjs-com'
// firebase import
import { db } from '../../firebase/firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const CartPage = () => {
  const [fullName, setFullName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [paidFor, setPaidFor] = useState()
  const [allItemsInString, setAllItemsInString] = useState('')
  const [currDate, setCurrDate] = useState('')
  const [itemId, setItemId] = useState('')
  const { setCartList, cartList, cartTotalPrice, setCartTotalPrice } = useCart()
  const form = useRef()
  const navigate = useNavigate()
  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    // setShow(true)
  }

  useEffect(() => {
    const collectionRef = collection(db, 'orders')
    // firebase functions here
    const addItem = async () => {
      emailjs
        .sendForm(
          'service_0smq8lv',
          'template_ax6eeg3',
          form.current,
          'vu26VMAeobO1GRbGM'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )

      emailjs
        .sendForm(
          'service_gtbq2lf',
          'template_hfgd3gh',
          form.current,
          '-J808qHg6-olf_XT7'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )

      await addDoc(collectionRef, {
        name: fullName,
        contact: contact,
        email: email,
        houseNumber: houseNumber,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        purchasedItems: cartList,
        totalPrice: cartTotalPrice,
        isDelivered: false,
        timestamp: serverTimestamp(),
      })

      setCartList([])
      setCartTotalPrice(0)
    }
    addItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paidFor])

  useEffect(() => {
    let appendHere = ''
    cartList.forEach((item) => (appendHere += item.name + ', '))
    setAllItemsInString(appendHere)
  }, [cartList])

  // get date
  useEffect(() => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    let yyyy = today.getFullYear()

    today = mm + '/' + dd + '/' + yyyy
    setCurrDate(today)
    setItemId(uuidv4().slice(0, 8))
  }, [])
  return (
    <div>
      <div style={{ height: '50vh', position: 'relative' }}>
        <img
          src={cartBg}
          className='w-100 h-100'
          style={{ objectFit: 'cover', filter: 'brightness(30%)' }}
          alt='cart-bg'
        />
        <h1
          className='rubik-400 text-light'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Cart Items
        </h1>
      </div>
      <Container>
        {/* number, img, name, price, remove */}
        <div className='row py-3 px-3 bg-white my-5'>
          {cartList.length > 0 ? (
            cartList.map((item, index) => (
              <CartListItem key={index} index={index} item={item} />
            ))
          ) : (
            <>
              <h1 className='text-center text-muted'>No Cart Items</h1>
              <Button
                variant='warning'
                className='col-3 mx-auto'
                onClick={() => navigate('/fundraising')}
              >
                Back to Shop
              </Button>
            </>
          )}
        </div>

        <div className='py-5'>
          <div className='d-flex align-items-center justify-content-end'>
            <h1 className='rubik-400'>Total: ${cartTotalPrice}.00</h1>
          </div>
          {cartList.length > 0 ? (
            <div className='d-flex align-items-center justify-content-end'>
              <Button
                className='me-2'
                onClick={() => setShowModal(true)}
                variant='warning'
              >
                Checkout
              </Button>
              <Button
                onClick={() => navigate('/fundraising')}
                variant='warning'
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          closeButton
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Checkout 💳
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='rubik-400'>
            <h4>Please enter your delivery address</h4>
            <p className='text-muted'>We will deliver to your home!</p>
            <Form ref={form} className='mb-4'>
              <Form.Group>
                <Form.Text>Full name</Form.Text>
                <Form.Control
                  name='name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder='Enter your full name'
                />
                <Form.Control
                  className='d-none'
                  name='items'
                  value={allItemsInString}
                />
                <Form.Control className='d-none' name='date' value={currDate} />
                <Form.Control
                  className='d-none'
                  name='totalAmount'
                  value={cartTotalPrice}
                />
                <Form.Control
                  className='d-none'
                  name='orderId'
                  value={itemId}
                />
              </Form.Group>
              <Form.Group className='mt-2'>
                <Form.Text>Contact number</Form.Text>
                <Form.Control
                  name='contact'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder='Enter your contact number'
                />
              </Form.Group>
              <Form.Group className='mt-2'>
                <Form.Text>Email</Form.Text>
                <Form.Control
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter email'
                  type='email'
                />
              </Form.Group>
              <Form.Group className='mt-2'>
                <Form.Text>Address</Form.Text>
                <div className='row'>
                  <div className='col-6'>
                    <Form.Control
                      name='houseNumber'
                      value={houseNumber}
                      onChange={(e) => setHouseNumber(e.target.value)}
                      placeholder='House number'
                    />
                  </div>
                  <div className='col-6'>
                    <Form.Control
                      name='street'
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder='Street'
                    />
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-6'>
                    <Form.Control
                      name='city'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder='City'
                    />
                  </div>
                  <div className='col-6'>
                    <Form.Control
                      name='state'
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder='State'
                    />
                  </div>
                </div>
                <div className='col-6 mt-2'>
                  <Form.Control
                    name='zipCode'
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder='Zip code'
                  />
                </div>
              </Form.Group>
            </Form>
            {!(
              fullName &&
              contact &&
              email &&
              houseNumber &&
              street &&
              city &&
              state &&
              zipCode
            ) ? (
              <div className='text-muted text-center small'>
                Please fill up the form to enable the PayPal button
              </div>
            ) : (
              <div className='text-muted text-center small'>
                Thank you. Please double check your fields.
              </div>
            )}

            <PayPalButtons
              disabled={
                !(
                  fullName &&
                  contact &&
                  email &&
                  houseNumber &&
                  street &&
                  city &&
                  state &&
                  zipCode
                )
              }
              forceReRender={[cartTotalPrice]}
              style={{
                // layout: 'horizontal',
                height: 48,
                // shape: 'pill',
                tagline: false,
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: 'ILTP Fundraising Item Purchase',
                      amount: {
                        value: cartTotalPrice,
                      },
                    },
                  ],
                  // application_context: {
                  //   shipping_preference: 'NO_SHIPPING',
                  // },
                })
              }}
              onApprove={async (data, actions) => {
                const order = await actions.order.capture()
                console.log('order', order)
                handleApprove(data.orderID)
                setShowModal(false)
                setShowSuccessModal(true)
              }}
              onError={(err) => {
                // you can use alert components to handle alerts
                console.error('PayPal Checkout onError', err)
              }}
              onCancel={() => {
                // Display cancel message, modal or redirect user to cancel page or back to cart
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <PaymentSuccessModal
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
    </div>
  )
}

export default CartPage
