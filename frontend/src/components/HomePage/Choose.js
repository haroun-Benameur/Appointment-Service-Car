import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import serviceRepair from '../../assets/images/service repair.png';
import solid from '../../assets/images/Solid.png';
import user from '../../assets/images/user.png';
import ServiceItem from '../../components/HomePage/ServiceItem'

const Choose = () => {
  return (
    <>
      <Row>
        <Col md={12} style={{textAlign:'center'}} >
          <h1 className='text-white'>Why Choose Us?</h1>
          <h5 className='text-white mt-5'>Our services are readily available, allowing for quick and convenient solutions.</h5>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <ServiceItem
          image={serviceRepair}
          title="Tailored to your needs"
          description="Whether you seek repairs, cleaning, or diagnostics, quickly find the right agency for the job."
        />
        <ServiceItem
          image={user}
          title="Professionalism"
          description="We connect you with a network of licensed, vetted, and reputable car service agencies, ensuring you receive professional care for your vehicle."
        />
        <ServiceItem
          image={solid}
          title="Confidence in every choice"
          description="We partner with trusted car service agencies in your area, ensuring quality and peace of mind."
        />
      </Row>
    </>
  );
};


export default Choose;
