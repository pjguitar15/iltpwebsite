import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const CartContext = React.createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [showAddToCartSuccessModal, setShowAddToCartSuccessModal] =
    useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  // Add items to list
  const addItemToList = (id, name, price, img) => {
    setCartList([...cartList, { id, name, price, img }])
    setShowAddToCartSuccessModal(true)
  }

  // remove from list
  const removeItemToList = (id) => {
    // get item
    const itemValues = cartList.filter((item) => item.id === id)
    // check how many repeated items
    const itemValuesLength = itemValues.length
    // if length === 1 then just go tradition remove
    if (itemValuesLength === 1) {
      const filtered = cartList.filter((item) => item.id !== id)
      setCartList(filtered)
      setCartTotalPrice(0)
    } else {
      // if length > 1 then pop one from itemValues, remove all, then add itemValues
      itemValues.pop()
      const filtered = cartList.filter((item) => item.id !== id)
      setCartList(itemValues, filtered)
      setCartTotalPrice(0)
    }
  }

  useEffect(() => {
    cartList.map((item) => setCartTotalPrice(cartTotalPrice + item.price))
  }, [cartList])
  const value = {
    cartList,
    addItemToList,
    showAddToCartSuccessModal,
    setShowAddToCartSuccessModal,
    cartTotalPrice,
    removeItemToList,
  }
  return (
    <CartContext.Provider value={value}>
      {children}
      {cartList.length > 0 && location.pathname !== '/fundraising/cart' ? (
        <div
          onClick={() => navigate('/fundraising/cart')}
          className='view-cart-button'
          style={{ position: 'fixed', bottom: '20px', right: '30px' }}
        >
          <div className='rounded p-3 shadow bg-white text-center'>
            <div style={{ fontSize: '20px' }}>🛒</div>
            <h5 className='m-0 p-0'>
              {cartList.length} item{cartList.length > 1 ? 's' : ''} on cart!
            </h5>
            <div>View now</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </CartContext.Provider>
  )
}

export default CartProvider
