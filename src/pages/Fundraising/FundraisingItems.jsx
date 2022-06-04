import React from 'react'
import { Container, Button } from 'react-bootstrap'
import keychain from '../../assets/keychain.jpg'
import FundraisingItem from './FundraisingItem'

const FundraisingItems = () => {
  return (
    <div className='py-5'>
      <Container>
        <h4>Our Fundraising Items</h4>
        <div className='row'>
          <FundraisingItem keychain={keychain} />
          <FundraisingItem keychain={keychain} />
          <FundraisingItem keychain={keychain} />
        </div>
      </Container>
    </div>
  )
}

export default FundraisingItems
