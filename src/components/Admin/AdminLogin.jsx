import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import './Admin.css'
import iltplogo from '../../assets/iltp-logo.png'

const AdminLogin = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const testUser = 'admin'
  const testPassword = 'admin'

  //   Submit handler

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user === testUser && password === testPassword) {
      alert('Login Success')
    } else {
      alert('Invalid Username/Password')
    }
  }

  return (
    <div className='bg-dark'>
      <div className='Admin'>
        <Form onSubmit={handleSubmit} className='col-lg-12 bg-light border p-5'>
          <div className='col-4 mx-auto mb-3'>
            <img className='w-100' src={iltplogo} alt='iltp logo' />
          </div>
          <h2 className='text-center mb-3'>Administrator Login</h2>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => setUser(e.target.value)}
              value={user}
              type='text'
              placeholder='Enter username'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='Enter password'
            />
            <Form.Text className='text-muted'>
              We'll never share your account with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <Alert key='warning' variant='warning mt-4 mb-0 text-center' size='sm'>
          Access ONLY to authorized users
        </Alert>
      </div>
    </div>
  )
}

export default AdminLogin
