import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { fundraisingItems } from './FundraisingItemsData'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { thankYouQuotes } from '../../Data/ThankYouQuotes'

const ItemOpen = () => {
  const [currItem, setCurrItem] = useState({})
  const [isNumberSet, setIsNumberSet] = useState(false)
  const [paidFor, setPaidFor] = useState()
  const [index, setIndex] = useState(0)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (fundraisingItems) {
      const filtered = fundraisingItems.filter((item) => item.id === id)
      setCurrItem(filtered[0])
    }

    const randomNum = Math.floor(Math.random() * 10)
    if (!isNumberSet) {
      setIndex(randomNum)
      setIsNumberSet(true)
    }
  }, [])

  useEffect(() => {
    console.log(index)
  }, [index])

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order
    // if response is success
    setPaidFor(true)
    // setShow(true)
  }

  return (
    <div className='bg-light py-5'>
      <Container>
        <div className='row shadow bg-white border py-3 px-1 mx-auto col-lg-10'>
          <div className='col-md-6 col-12'>
            <div className='ms-auto'>
              <img
                className='w-100 h-100'
                style={{ objectFit: 'cover' }}
                src={currItem.img}
                alt='item'
              />
            </div>
          </div>
          <div className='col-md-6 px-4 py-4 py-lg-0 rubik-400'>
            <h1 className='mt-3'>{currItem.name}</h1>
            <h2 className='mb-4 mb-lg-3' style={{ color: '#ff3838' }}>
              ${currItem.price}
            </h2>
            <p className='text-muted'>
              Random Quote: “{thankYouQuotes[index].quote}” -
              {thankYouQuotes[index].author}
            </p>
            <p className='text-muted'>
              We would like to thank you from the bottom of our hearts for your
              support. 💖
            </p>
            <p className='text-muted'>-ILTP</p>
            {/* <PayPalButtons
              forceReRender={[currItem]}
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
                      description: currItem.name,
                      amount: {
                        value: currItem.price,
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
            /> */}
            <Button variant='warning' className='mt-auto col-12 col-lg-12 mb-2'>
              Buy now
            </Button>
            <Button
              className='mt-auto col-12 col-lg-12'
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ItemOpen
