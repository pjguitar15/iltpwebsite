import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router-dom'
import 'aos/dist/aos.css'

export const PaypalTextPage = () => {
  const [modalShow, setModalShow] = useState(false)
  const [paidFor, setPaidFor] = useState(false)
  const [donationAmount, setDonationAmount] = useState(5)

  const navigate = useNavigate()

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    // Refresh user's account or subscription status

    console.log(orderId)
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");

    if (paidFor) {
      // Display success message, modal or redirect user to success page
      alert('Thank you for your support!')
    }
  }

  return (
    <div className='bg-dark text-light py-5' style={{ minHeight: '100vh' }}>
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
          <h1
            data-aos='fade-down'
            data-aos-duration='1000'
            style={{ fontSize: '100px' }}
            className='text-center py-4 lead'
          >
            ${donationAmount}.00
          </h1>
          <Form.Text className='text-light'>
            {/* <span data-aos='fade-left' data-aos-duration='1000'>
              You can change the amount here
            </span> */}
          </Form.Text>
          <Form.Control
            data-aos='fade-up'
            data-aos-duration='1000'
            className='text-center'
            placeholder='$1.00'
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            type='number'
            size='lg'
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
