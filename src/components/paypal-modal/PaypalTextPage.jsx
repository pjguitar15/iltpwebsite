import React, { useState, useEffect, useRef } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from 'aos'
import SuccessModal from './SuccessModal'

export const PaypalTextPage = () => {
  const [show, setShow] = useState(false)
  const [paidFor, setPaidFor] = useState(false)
  const [donationAmount, setDonationAmount] = useState('$5')
  const [numWithDollar, setNumWithDollar] = useState('')
  const inputReference = useRef(null)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    inputReference.current.focus()
  }, [])

  const navigate = useNavigate()

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    setShow(true)
  }
  useEffect(() => {
    if (donationAmount.length > 0) {
      setNumWithDollar('$' + donationAmount.slice(1))
    }
  }, [donationAmount])

  return (
    <div
      className='py-5'
      style={{ minHeight: '100vh', background: 'rgb(225,250,208)' }}
    >
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
        <Form.Group className='col-12 col-sm-6 col-lg-4 mx-auto text-center'>
          <Form.Text className='text-muted opensans-thin'>
            Please type the amount below
          </Form.Text>
          <Form.Control
            ref={inputReference}
            data-aos='fade-up'
            data-aos-duration='1000'
            // inside Home.css
            className='text-center paypal-amount-input shadow-none text-dark'
            placeholder='$1.00'
            value={numWithDollar}
            onChange={(e) => {
              const validCharacters = '1234567890'
              const value = e.target.value
              if (
                value.length > 0 || // need this to allow character deletion
                validCharacters.includes(value.substr(value.length - 1))
              ) {
                setDonationAmount(value)
              }
            }}
            type='text'
            style={{
              height: '100px',
              fontSize: '80px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
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
              // layout: 'horizontal',
              height: 48,
              // shape: 'pill',
              tagline: false,
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: 'Fundraising Donation',
                    amount: {
                      value: parseInt(donationAmount.slice(1)),
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
          <Button
            onClick={() => navigate(-1)}
            variant='light mt-1'
            className='shadow col-12 col-sm-6 col-lg-4'
          >
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  )
}
