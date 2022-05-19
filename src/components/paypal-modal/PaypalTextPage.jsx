import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

export const PaypalTextPage = () => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className='bg-dark text-light' style={{ height: '100vh' }}>
      <Container>
        <h1 className='display-3 text-center pt-4'>Paypal React JS</h1>
        <div className='text-center'>
          <Button variant='light mt-4'>Open modal</Button>
        </div>
      </Container>
    </div>
  )
}
