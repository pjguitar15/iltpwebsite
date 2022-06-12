import React from 'react'
import { useCart } from '../../context/CartProvider'

const CartListItem = ({ item, index }) => {
  const { removeItemToList } = useCart()
  return (
    // <div className='col-12  pt-4 row border my-2 shadow-sm'>
    //   <div className='col-lg-5 mx-auto'>
    //     <div
    //       className='col-12 col-sm-6 d-flex bg-info'
    //       style={{ height: '14rem', width: '14rem' }}
    //     >
    //       <img
    //         className='w-100 h-100'
    //         style={{ objectFit: 'cover' }}
    //         src={item.img}
    //         alt=''
    //       />
    //     </div>
    //     <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center'>
    //       <div>
    //         <h5 className='rubik-400 py-3'>{item.name}</h5>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='col-3 d-flex align-items-center justify-content-center mx-auto'>
    //     <div>
    //       <h4 className='rubik-400'>${item.price}</h4>
    //     </div>
    //   </div>
    //   <div className='col-2 d-flex align-items-center'>
    //     <div
    //       onClick={() => removeItemToList(item.id)}
    //       className='btn btn-danger'
    //     >
    //       Remove
    //     </div>
    //   </div>
    // </div>
    <div className='col-lg-4 col-xl-3 col-12 col-sm-6 p-3'>
      <div className='border'>
        <div style={{ height: '14rem' }}>
          <img
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
            src={item.img}
            alt='item'
          />
        </div>
        {/* body */}
        <div className='p-3'>
          <h6>{item.name}</h6>
          <h5>${item.price}</h5>
          <div
            onClick={() => removeItemToList(item.id)}
            className='btn btn-outline-danger btn-sm'
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartListItem
