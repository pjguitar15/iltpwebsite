import React, { useState } from 'react'
import { Container, Button, Modal, Form } from 'react-bootstrap'
import cartBg from '../../assets/cart-bg.jpg'
import { useCart } from '../../context/CartProvider'
import CartListItem from './CartListItem'
import { useNavigate } from 'react-router-dom'
import { PayPalButtons } from '@paypal/react-paypal-js'

const CartPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [paidFor, setPaidFor] = useState()
  const { cartList, cartTotalPrice } = useCart()
  const navigate = useNavigate()
  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    // setShow(true)
  }
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
                onClick={() => navigate('/fundraising')}
                variant='warning'
                className='me-2'
              >
                Continue Shopping
              </Button>
              <Button onClick={() => setShowModal(true)} variant='warning'>
                Checkout
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>

        <Modal
          show={showModal}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Checkout 💳
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='rubik-400'>
            <h4>Please enter your delivery address</h4>
            <p className='text-muted'>We will deliver to your home!</p>
            <Form className='mb-4'>
              <Form.Group>
                <Form.Text>Full name</Form.Text>
                <Form.Control placeholder='Enter your full name' />
              </Form.Group>{' '}
              <Form.Group>
                <Form.Text>Full address</Form.Text>
                <Form.Control placeholder='Enter your full address' />
              </Form.Group>
            </Form>
            <PayPalButtons
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
                      description: 'test',
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
    </div>
  )
}

export default CartPage
