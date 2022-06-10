import React from 'react'
import { Container } from 'react-bootstrap'
import FundraisingItem from './FundraisingItem'
import { fundraisingItems } from './FundraisingItemsData'

const FundraisingItems = () => {
  return (
    <div className='py-5'>
      <Container>
        <h4 className='rubik-400'>SHOP</h4>
        <div className='row'>
          {fundraisingItems.map((item, index) => (
            <FundraisingItem key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default FundraisingItems
