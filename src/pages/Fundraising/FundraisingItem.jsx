import React from 'react'
import { useNavigate } from 'react-router-dom'

const FundraisingItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-12 py-3'>
      <div
        onClick={() => navigate(`/support/item/${item.id}`)}
        className='fundraising-item'
      >
        <div className='rounded'>
          <div style={{ height: '22rem', position: 'relative' }}>
            <img
              style={{ objectFit: 'cover' }}
              src={item.img}
              className='w-100 h-100 item-img'
              alt='item'
            />
            <div className='inside-fr-items w-100 text-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50'
                height='50'
                fill='white'
                className='bi bi-bag-heart'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z'
                />
              </svg>{' '}
              <h4 className='text-light mt-2'>Order</h4>
            </div>
          </div>
          {/* item name and description */}
          <div className='px-2 py-3'>
            <h6 className='rubik-400'>{item.name}</h6>
            <h4 className='rounded' style={{ color: '#ff3838' }}>
              ${item.price}
            </h4>
          </div>
        </div>
      </div>
      <div
        className='col-12 neon'
        style={{ height: '4px', background: 'gray' }}
      ></div>
    </div>
  )
}

export default FundraisingItem
