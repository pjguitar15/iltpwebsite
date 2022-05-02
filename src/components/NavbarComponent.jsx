import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import iltpLogo from '../assets/iltp-logo.png'
import '../NavbarStyle.css'
import { useNavigate, useLocation } from 'react-router-dom'

const NavbarComponent = () => {
  const [navbar, setNavbar] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  // useLocation
  const location = useLocation()

  // use history hook
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
    setCurrentPath('/')
  }

  const goToAboutUs = () => {
    navigate('/about')
    setCurrentPath('/about')
  }

  const goToNews = () => {
    navigate('/news')
    setCurrentPath('/news')
  }

  const goToFundraising = () => {
    navigate('/fundraising')
    setCurrentPath('/fundraising')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const changeNavbarBackground = () => {
    if (
      (location.pathname === '/' ||
        location.pathname === '/about' ||
        location.pathname === '/fundraising' ||
        location.pathname === '/news') &&
      window.scrollY >= 300
    ) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbarBackground)

  return (
    <Navbar
      className={`bg-md-white  shadow-sm ${
        currentPath !== '/test' ? 'fixed-top' : ''
      } ${navbar ? 'bg-white shadow-sm' : 'bg-none shadow-none'}`}
      expand='lg'
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: 'pointer' }}
          className='mt-3 mb-3 brand d-flex'
          onClick={goHome}
        >
          <img className='mt-1' src={iltpLogo} />
          <div
            className={`iltp-brand-text d-flex justify-content-center flex-column text-start 
            ${navbar ? 'text-black' : 'text-white'}`}
          >
            <span>International Leadership</span>
            <span>Training Program</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              onClick={goHome}
              className={`${
                navbar ? 'text-black' : 'text-white'
              } mx-3 nav-link-hover`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${
                navbar ? 'text-black' : 'text-white'
              } mx-3 nav-link-hover`}
              onClick={goToAboutUs}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className={`${navbar ? 'text-black' : 'text-white'} mx-3 nav-link-hover`}
              onClick={goToFundraising}
            >
              Fundraising
            </Nav.Link>
            <Nav.Link
              className={`${
                navbar ? 'text-black' : 'text-white'
              } mx-3 nav-link-hover`}
              onClick={goToNews}
            >
              News
            </Nav.Link>
            <Nav.Link
              className={`${navbar ? 'text-black' : 'text-white'} mx-3 nav-link-hover`}
              onClick={goToFundraising}
            >
              Contact Us
            </Nav.Link>
            <Button
              onClick={() => alert('Still working on this -developer')}
              className='mx-3'
              variant='success'
            >
              <i className='fa fa-paypal me-1'></i>
              Donate
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
