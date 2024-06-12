import { Col, Image, Row } from 'react-bootstrap';

const ServiceItem = ({ image, title, description }) => {
    return (
      <Col md={6} lg={6} xl={6} xxl={12} style={{ marginTop: '10%' }}>
        <Row  >
          <Col md={4} lg={2}  >
            <Image src={image} />
          </Col>
          <Col md={8} className='mx-4' >
            <Row>
              <h4 style={{ color: '#737373' }}>{title}</h4>
            </Row>
            <Row>
              <p style={{color:'#A6A6A6'}} >{description}</p>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  export default ServiceItem;