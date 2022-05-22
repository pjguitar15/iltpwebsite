import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PillButton from '../../components/PillButton'
import fr1 from '../../assets/fundraising-photos/fr1.jpg'
import fr2 from '../../assets/fundraising-photos/fr2.jpg'
import { useNavigate } from 'react-router-dom'
import 'aos/dist/aos.css'
const FundraisingPhotos = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Container className='py-5'>
        <Row data-aos='fade-up' data-aos-duration='1000'>
          <Col>
            <Row>
              <Col md='8' style={{ height: '400px' }} className='mb-3'>
                <img
                  src={fr1}
                  className='w-100 h-100'
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
              </Col>
              <Col md='4' className='me-auto'>
                <h3>Fund Raising, Purpose, Finances</h3>
                <p
                  className='opensans-thin text-muted'
                  style={{ lineHeight: '30px' }}
                >
                  Our volunteer teams conduct fund-raising activities
                  occasionally in order to cover the cost of service projects,
                  seminars and other operational expenses.
                </p>
              </Col>
            </Row>
            <Row
              className='mt-5 p-2'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Col className='ms-auto mb-3' md='8' style={{ height: '400px' }}>
                <img
                  className='w-100 h-100'
                  style={{ objectFit: 'cover' }}
                  src={fr2}
                  alt='fundraising'
                />
              </Col>
              <Col md='4' className='col-12'>
                <h3>Volunteers</h3>
                <p
                  className='opensans-thin text-muted'
                  style={{ lineHeight: '30px' }}
                >
                  In fact, ILTP program is operated solely by volunteers and
                  your generous donations. At the same time, our volunteers are
                  learning from cross-cultural experiences as they come from
                  overseas.
                </p>
              </Col>
            </Row>
            <div className='mt-5 py-3'>
              <div className='text-center'>
                <i
                  className='bi bi-heart-fill text-danger'
                  style={{ fontSize: '100px' }}
                ></i>
              </div>
              <h3 className='mt-3 text-center'>Thank you for your support!</h3>
              <p
                className='opensans-thin text-muted col-lg-5 mx-auto text-center'
                style={{ lineHeight: '30px' }}
              >
                Please help our volunteers keep up their good work with your
                smile, contributions and unforgettable conversations, if you
                happen to meet one of them!
              </p>
              {/* donate button here */}
              <div className='text-center pt-2'>
                <PillButton
                  primaryColor='#FFC107'
                  secondaryColor='#ffd146'
                  textColor='#303030'
                  handleClick={() => navigate('/paypal-payment')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-piggy-bank-fill me-2'
                    viewBox='0 0 16 16'
                  >
                    <path d='M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
                  </svg>
                  Donate
                </PillButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FundraisingPhotos
