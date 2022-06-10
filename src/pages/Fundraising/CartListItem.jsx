import React from 'react'
import { useCart } from '../../context/CartProvider'

const CartListItem = ({ item, index }) => {
  const { removeItemToList } = useCart()
  return (
    <div className='col-12 row border my-2 shadow-sm'>
      <div className='col-1 d-flex align-items-center justify-content-center'>
        <h5>{index + 1}</h5>
      </div>
      <div className='col-2 d-flex'>
        <img
          className='w-100 h-100'
          style={{ objectFit: 'cover' }}
          src={item.img}
          alt=''
        />
      </div>
      <div className='col-3 d-flex align-items-center justify-content-center mx-auto'>
        <div>
          <h4 className='rubik-400'>{item.name}</h4>
        </div>
      </div>
      <div className='col-3 d-flex align-items-center justify-content-center mx-auto'>
        <div>
          <h4 className='rubik-400'>${item.price}</h4>
        </div>
      </div>
      <div className='col-2 d-flex align-items-center'>
        <div
          onClick={() => removeItemToList(item.id)}
          className='btn btn-danger'
        >
          Remove
        </div>
      </div>
    </div>
  )
}

export default CartListItem
