import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const ServiceCard = () => {
  const service = useSelector((state) => state.service);
  const { services } = service;

  return (
    <>
      {services.map((item) => (
        <Col md={3} xs={6} sm={6} key={item.id} className="mb-3">

          <Card
            className=''
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight:'50vh',
              
              border:'none',
              boxShadow:'red'
            }}
          >

            <Card.Body 
            className="text-center text-white d-flex flex-column justify-content-center align-items-center "
            
            >
              
                <Card.Img
                  className="w-auto mb-3"
                  src={item.icone}
                  alt="icone"
                />
              
              <Card.Text>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </Card.Text>
              <LinkContainer to="/more">
                <Button>Read more</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ServiceCard;
