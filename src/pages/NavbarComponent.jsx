import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import iltpLogo from '../assets/iltp-logo.png'
import '../NavbarStyle.css'
import { useLocation, Link, useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
  const [navbar, setNavbar] = useState(false)
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  // scrolls back to top when location is changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  // disable text selection
  const disableSelectNoUnderline = {
    userSelect: 'none' /* supported by Chrome and Opera */,
    WebkitUserSelect: 'none' /* Safari */,
    KhtmlUserSelect: 'none' /* Konqueror HTML */,
    MozUserSelect: 'none' /* Firefox */,
    MsUserSelect: 'none' /* Internet Explorer/Edge */,
    textDecoration: 'none',
  }

  // change background to white when passed 300 axis Y up
  const scrollListener = () => {
    if (window.scrollY >= 250) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollListener)

  return (
    <div
      className={`shadow-sm fixed-top ${
        navbar ? 'bg-white shadow-sm' : 'bg-none shadow-none'
      }`}
    >
      {/* Expires on August 22, 2022 */}
      {!(new Date() > new Date('2022-08-22')) && location.pathname === '/' ? (
        <div
          style={{ fontSize: '13px' }}
          className={`bg-success opensans-thin text-white py-1 text-center ${
            navbar ? 'd-none' : 'd-block'
          }`}
        >
          Thank you for visiting our new ILTP website!
        </div>
      ) : (
        ''
      )}
      {windowDimenion.winWidth < 600 && navbar ? (
        <div className='text-center py-2 bg-success col-12'>
          <h6 className='text-light m-0 p-0'>
            International Leadership Training Program
          </h6>
        </div>
      ) : (
        ''
      )}

      <Navbar
        variant={`${navbar || isToggleOpen ? 'light' : 'dark'} ${
          windowDimenion.winWidth < 990 ? 'dark' : 'light'
        } `}
        expand='lg'
        expanded={isToggleOpen}
        className={`${isToggleOpen ? 'bg-light' : ''}`}
      >
        <Container>
          <Navbar.Brand className='py-0' style={{ cursor: 'pointer' }}>
            <Link
              to='/'
              style={{ textDecoration: 'none' }}
              className='mt-3 mb-3 brand d-flex'
            >
              <img className='mt-0' src={iltpLogo} alt='iltp logo' />
              <div
                className={`iltp-brand-text d-flex justify-content-center flex-column text-start 
            ${navbar || isToggleOpen ? 'text-black' : 'text-white'}`}
              >
                {windowDimenion.winWidth < 600 ? (
                  <h4>ILTP</h4>
                ) : (
                  <>
                    <span style={disableSelectNoUnderline}>
                      International Leadership
                    </span>
                    <span style={disableSelectNoUnderline}>
                      Training Program
                    </span>
                  </>
                )}
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-controls='basic-navbar-nav'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/'
                style={disableSelectNoUnderline}
              >
                Home
              </Link>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/about'
                style={disableSelectNoUnderline}
              >
                About
              </Link>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/photo-gallery'
                style={disableSelectNoUnderline}
              >
                Photo Gallery
              </Link>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/support'
                style={disableSelectNoUnderline}
              >
                Support
              </Link>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/news'
                style={disableSelectNoUnderline}
              >
                News
              </Link>
              <Link
                onClick={() => setIsToggleOpen(false)}
                className={`${
                  navbar || isToggleOpen ? 'text-black' : 'text-white'
                } mx-2 nav-link-hover`}
                to='/contact'
                style={disableSelectNoUnderline}
              >
                Contact Us
              </Link>
              <Button
                onClick={() => {
                  navigate('/paypal-payment')
                }}
                className='mx-2 rubik-400'
                variant={`${
                  navbar || isToggleOpen ? 'success' : 'outline-light'
                }`}
              >
                <i className='fa fa-paypal me-1'></i>
                Donate
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
