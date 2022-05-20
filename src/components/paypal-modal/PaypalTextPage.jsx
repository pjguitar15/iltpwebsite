import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from 'aos'
import SuccessModal from './SuccessModal'

export const PaypalTextPage = () => {
  const [show, setShow] = useState(false)
  const [paidFor, setPaidFor] = useState(false)
  const [donationAmount, setDonationAmount] = useState(5)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const navigate = useNavigate()

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    setShow(true)
  }

  return (
    <div className='bg-dark text-light py-5' style={{ minHeight: '100vh' }}>
      <SuccessModal
        setShow={setShow}
        show={show}
        donationAmount={donationAmount}
      />
      <Container>
        <h1
          data-aos='fade-down'
          data-aos-duration='1000'
          className='display-6 text-center pt-4'
        >
          We appreciate your support!
        </h1>
        {/* Select amount */}
        <Form.Group className='col-12 col-sm-6 col-lg-4 mx-auto'>
          {/* <h1
            data-aos='fade-down'
            data-aos-duration='1000'
            style={{ fontSize: '100px' }}
            className='text-center py-4 lead'
          >
            ${donationAmount}.00
          </h1> */}
          <Form.Text className='text-light'>
            {/* <span data-aos='fade-left' data-aos-duration='1000'>
              You can change the amount here
            </span> */}
          </Form.Text>
          <Form.Control
            data-aos='fade-up'
            data-aos-duration='1000'
            // inside Home.css
            className='text-center paypal-amount-input'
            placeholder='$1.00'
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            type='number'
            // size='lg'
            style={{
              height: '100px',
              fontSize: '80px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
            }}
          />
        </Form.Group>
        {/* Paypal Button here */}
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='col-12 col-sm-6 col-lg-4 text-center my-3 mx-auto'
        >
          <PayPalButtons
            forceReRender={[donationAmount]}
            style={{
              layout: 'horizontal',
              height: 48,
              shape: 'pill',
              tagline: false,
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: 'Fundraising Donation',
                    amount: {
                      value: parseInt(donationAmount),
                    },
                  },
                ],
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
        </div>
        <div className='text-center'>
          <Button onClick={() => navigate(-1)} variant='outline-light mt-1'>
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  )
}
