import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import location from '../assets/images/location.png';
import mail from '../assets/images/mail.png';

const Footer = () => {
  return (
    <footer  
    style={{background:'#06112c'}}
    className=" text-white py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className=" text-white mb-4">Find the perfect spot for your car's service needs</h2>
          </Col>
          <Col md={6}>
            <Row className="mb-3">
              <Col md={1} className="align-self-center">
                <Image src={location} alt="Location" rounded />
              </Col>
              <Col md={11} className="align-self-center">
                <p className="mb-0">8502 Preston Rd. Inglewood, Maine 98380, USA</p>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={1} className="align-self-center">
                <Image src={mail} alt="Mail" rounded />
              </Col>
              <Col md={11} className="align-self-center">
                <p className="mb-0">b&bcarservices@gmail.com</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
          <p style={{textAlign:'center'}}  className='text-white-50 mt-5 mb-0  '>© Copyright 2024, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
