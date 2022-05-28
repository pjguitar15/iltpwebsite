import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  let navigate = useNavigate()
  return (
    <div className='ErrorPage'>
      <section className='error-container'>
        <span>4</span>
        <span>
          <span className='screen-reader-text'>0</span>
        </span>
        <span>4</span>
      </section>
      <p className='zoom-area'>
        You have entered an <b>unknown</b> page.
      </p>
      <div className='link-container'>
        <button
          target='_blank'
          href='https://www.silocreativo.com/en/creative-examples-404-error-css/'
          className='btn btn-sm btn-warning'
          onClick={() => {
            navigate('/')
          }}
        >
          Go back home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
