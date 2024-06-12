import React from 'react'
import { Row, Button, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const HeaderAddCar = () => {
  return (
    <>
      <Container fluid className='pt-5' >  
        <Row>
          <Col xs={12} md={6} >
            <h2 
            style={{ color: 'white' }}
            >add new car</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeaderAddCar
