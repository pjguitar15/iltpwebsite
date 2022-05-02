import React from 'react'
import logo from '../assets/iltp-logo.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  // use history hook
  const navigate = useNavigate()

  // go home
  // const goToHome = () => {
  //   navigate('/')
  // }
  return (
    <div>
      <footer className='page-footer bg-success text-white font-small blue pt-4'>
        <div className='container-fluid text-center text-md-left'>
          <div className='row'>
            <div className='col-md-6 mt-md-0 mt-3'>
              <div className='col-lg-1 col-3 col-md-2 mx-auto'>
                <img className='w-100' src={logo} alt='' />
              </div>
              <h5>International Leadership Training Program</h5>
              <p>One Family Under One God</p>
            </div>

            <hr className='clearfix w-100 d-md-none pb-0' />

            <div className='col-md-3 mb-md-0 mb-3'>
              <h5 className='text-uppercase'>Socials</h5>
              <ul className='list-unstyled'>
                <li>
                  <a
                    className='text-white'
                    href='https://www.facebook.com/ImpactingLivesTowardsPeace/'
                  >
                    <i className='bi bi-facebook me-1 '></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    className='text-white'
                    href='https://www.instagram.com/iltpusa/'
                  >
                    <i className='bi bi-instagram me-1'></i>Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 mb-md-0 mb-3'>
              <h5 className='text-uppercase'>Links</h5>
              <ul className='list-unstyled ' style={{ cursor: 'pointer' }}>
                <li>
                  <div
                    className='text-white text-decoration-underline'
                    onClick={(e) => navigate('/')}
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div
                    className='text-white text-decoration-underline'
                    onClick={(e) => navigate('/about')}
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    className='text-white text-decoration-underline'
                    onClick={(e) => navigate('/news')}
                  >
                    News
                  </div>
                </li>
                <li>
                  <div
                    className='text-white text-decoration-underline'
                    onClick={(e) => navigate('/fundraising')}
                  >
                    Fundraising
                  </div>
                </li>
                <li>
                  <div className='text-white text-decoration-underline'>
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-copyright text-center py-3'>
          <a className='text-white' href='https://mdbootstrap.com/'>
            iltp.org
          </a>
          © 2022 ILTP ORG | All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer
