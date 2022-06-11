import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { fundraisingItems } from './FundraisingItemsData'
import { thankYouQuotes } from '../../Data/ThankYouQuotes'
import { useCart } from '../../context/CartProvider'
import { Modal } from 'react-bootstrap'

const ItemOpen = () => {
  const [currItem, setCurrItem] = useState({})
  const [isNumberSet, setIsNumberSet] = useState(false)

  const [index, setIndex] = useState(0)
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    addItemToList,
    showAddToCartSuccessModal,
    setShowAddToCartSuccessModal,
  } = useCart()

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

  return (
    <div className='bg-light py-5'>
      <Modal
        show={showAddToCartSuccessModal}
        onHide={() => setShowAddToCartSuccessModal(false)}
        className='rubik-400'
      >
        <Modal.Header closeButton>
          <Modal.Title>Item added to cart! 🙌</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you just added {currItem.name} to cart! 🎊
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => {
              setShowAddToCartSuccessModal(false)
              navigate(-1)
            }}
          >
            Continue shopping
          </Button>
          <Button
            variant='warning'
            onClick={() => {
              setShowAddToCartSuccessModal(false)
              navigate('/fundraising/cart')
            }}
          >
            Go to Cart
          </Button>
        </Modal.Footer>
      </Modal>
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

            <Button
              onClick={() =>
                addItemToList(
                  currItem.id,
                  currItem.name,
                  currItem.price,
                  currItem.img
                )
              }
              variant='warning'
              className='mt-auto col-12 col-lg-12 mb-2'
            >
              <i className='bi bi-bag-plus me-2'></i>Add to Cart
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
