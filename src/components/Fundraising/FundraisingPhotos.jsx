import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FundraisingSectionsData } from '../../Data/FundraisingSectionsData'
import fr1 from '../../assets/fundraising-photos/fr1.jpg'
import fr2 from '../../assets/fundraising-photos/fr2.jpg'
import fr3 from '../../assets/fundraising-photos/fr3.jpg'
import fr4 from '../../assets/fundraising-photos/fr4.jpg'
import fr5 from '../../assets/fundraising-photos/fr5.jpg'
import fr6 from '../../assets/fundraising-photos/fr6.jpg'
import fr7 from '../../assets/fundraising-photos/fr7.jpg'
import fr8 from '../../assets/fundraising-photos/fr8.jpg'
const FundraisingPhotos = () => {
  return (
    <div>
      <Container className='py-5'>
        <Row>
          <Col>
            <Row className='bg-light p-4'>
              <Col md='4' className='me-auto'>
                <h3>Fund Raising, Purpose, Finances</h3>
                <p className='lead'>
                  Our volunteer teams conduct fund-raising activities
                  occasionally in order to cover the cost of service projects,
                  seminars and other operational expenses.
                </p>
              </Col>
              <Col md='4'>
                <img src={fr1} className='w-100' alt='' />
              </Col>
            </Row>
            <Row className='mt-5 p-4'>
              <Col md='4'>
                <h3>Volunteers</h3>
                <p className='lead'>
                  In fact, ILTP program is operated solely by volunteers and
                  your generous donations. At the same time, our volunteers are
                  learning from cross-cultural experiences as they come from
                  overseas.
                </p>
              </Col>
              <Col md='4' className='ms-auto'>
                <img src={fr2} className='w-100' alt='' />
              </Col>
            </Row>
            <hr />
            <div className='shadow-sm rounded mt-5 py-3'>
              <div className='text-center'>
                <i
                  className='bi bi-heart-fill text-danger'
                  style={{ fontSize: '100px' }}
                ></i>
              </div>
              <h3 className='mt-3 text-center'>Thank you for your support!</h3>
              <p className='lead col-lg-5 mx-auto text-center'>
                Please help our volunteers keep up their good work with your
                smile, contributions and unforgettable conversations, if you
                happen to meet one of them!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FundraisingPhotos
