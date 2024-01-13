import React from 'react'
import logo from '../assets/iltp-logo.png'
import { useNavigate } from 'react-router-dom'
import './styles/Home.css'

const Footer = () => {
  // use history hook
  const navigate = useNavigate()
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return (
    <div>
      <footer className='page-footer text-white font-small blue pt-4 bg-custom-green'>
        <div className='container-fluid text-center text-md-left'>
          <div className='row'>
            <div className='col-md-6 mt-md-0 mt-3'>
              <div className='col-lg-1 col-3 col-md-2 mx-auto'>
                <img className='w-100' src={logo} alt='' />
              </div>
              <h5 className='font-poppins-500'>
                International Leadership Training Program
              </h5>
              <p className='font-poppins-400'>One Family Under One God</p>
            </div>

            <hr className='clearfix w-100 d-md-none pb-0' />

            <div className='col-md-3 mb-md-0 mb-3'>
              <h5 className='text-uppercase font-poppins-500'>Socials</h5>
              <ul className='list-unstyled'>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='text-white text-decoration-none font-poppins-400'
                    href='https://www.facebook.com/ILTP2023'
                  >
                    <i className='bi bi-facebook me-1 '></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='text-white text-decoration-none font-poppins-400'
                    href='https://www.instagram.com/iltp2023/'
                  >
                    <i className='bi bi-instagram me-1'></i>Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 mb-md-0 mb-3'>
              <h5 className='text-uppercase text-center font-poppins-500'>
                Links
              </h5>
              <ul
                className='list-unstyled text-center'
                style={{ cursor: 'pointer' }}
              >
                <li>
                  <div
                    className='text-white font-poppins-400'
                    onClick={(e) => navigate('/')}
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div
                    className='text-white font-poppins-400'
                    onClick={(e) => navigate('/about')}
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    className='text-white font-poppins-400'
                    onClick={(e) => navigate('/news')}
                  >
                    News
                  </div>
                </li>
                <li>
                  <div
                    className='text-white font-poppins-400'
                    onClick={(e) => navigate('/support')}
                  >
                    Fundraising
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => navigate('/contact')}
                    className='text-white font-poppins-400'
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-copyright text-center pb-2 font-poppins-400'>
          <a className='text-white' href='https://iltp.org/'>
            iltp.org
          </a>
          © {year} ILTP ORG | All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer
