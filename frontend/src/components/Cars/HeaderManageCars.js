import React from 'react'
import { Row, Button, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const HeaderManageCars = () => {
  return (
    <>
      <Container className='pt-5' >  
        <Row className="align-items-center">
          <Col xs={12} md={6} className='d-flex align-items-center'>
            <h2 style={{ color: 'white' }}>manage your cars</h2>
          </Col>

          <Col xs={12} md={6}>
            <Row className="justify-content-end">
              <Col xs={12} md={6} className='d-flex align-items-center'>
                <input
                  className='w-100'
                  style={{ borderRadius: '2em' }}
                  type='search' placeholder='search'></input>
              </Col>
              <Col xs={12} md={6} className='d-flex align-items-center justify-content-md-end'>
               
               <LinkContainer 
                className='mt-2'
                style={{ background: '#0C3E9F' }} to='addCar' >
               
                <Button
                 >+ add new car
                 </Button>
               </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeaderManageCars
