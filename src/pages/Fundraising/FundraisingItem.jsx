import React from 'react'
import { Button } from 'react-bootstrap'

const FundraisingItem = ({ keychain }) => {
  return (
    <div className='col-lg-4 col-md-6 p-3'>
      <div style={{ height: '13 rem' }}>
        <img src={keychain} className='w-100 h-100' alt='item' />
      </div>
      {/* item name and description */}
      <div className='px-2 py-3'>
        <h4>Keychain</h4>
        <p className='small text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius
          deserunt architecto odit illo sapiente, ullam omnis fuga laboriosam.
        </p>
        <hr />
        <div className='d-flex justify-content-between'>
          <h4>$5</h4>
          <Button size='sm' variant='warning'>
            <i className='fa fa-paypal me-1'></i> Check Out Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FundraisingItem
