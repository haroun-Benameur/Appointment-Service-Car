import React, { useState } from 'react';
import { Row, Button, Col, Container, Form } from 'react-bootstrap';
import HeaderAddCar from '../../components/Cars/HeaderAddCar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../../actions/CarActions';

const AddCar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();  
 const [selectedButton, setSelectedButton] = useState('');
  const [chassis, setChassis] = useState('');
  const [matricule, setMatricule] = useState('');
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuel, setfuel] = useState('');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleChassisChange = (e) => {
    setChassis(e.target.value);
  };

  const handlematriculeChange = (e) => {
    setMatricule(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleMileageChange = (e) => {
    setMileage(e.target.value);
  };

  const handlefuelChange = (e) => {
    setfuel(e.target.value);
  };


  const submitHandler= async(e)=>{
    e.preventDefault(); 
    
    dispatch(
      addCar(model,chassis,matricule,fuel,mileage),
      navigate('/homeAccount')
    );

    
  }

 

  return (
    <>
      <HeaderAddCar />
      <Container style={{ maxWidth: '600px', marginTop: '50px', backgroundColor: '#061633', padding: '20px', borderRadius: '10px', color: 'white' }}>
        <Form onSubmit={submitHandler} >
          <Row className="mb-3 text-center">
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button
                variant={selectedButton === 'RS' ? 'light' : 'outline-light'}
                onClick={() => handleButtonClick('RS')}
              >
                RS
              </Button>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button
                variant={selectedButton === 'TUN' ? 'light' : 'outline-light'}
                onClick={() => handleButtonClick('TUN')}
              >
                TUN
              </Button>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button
                variant={selectedButton === 'PE' ? 'light' : 'outline-light'}
                onClick={() => handleButtonClick('PE')}
              >
                PE
              </Button>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button
                variant={selectedButton === 'CD' ? 'light' : 'outline-light'}
                onClick={() => handleButtonClick('CD')}
              >
                CD
              </Button>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Chassis number:</Form.Label>
            <Form.Control type="text" name="chassis" onChange={handleChassisChange}  />
          </Form.Group>

          <Row className="mb-3">
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <Form.Group>
                <Form.Label>matricule</Form.Label>
                <Form.Control type="text" name="matricule" onChange={handlematriculeChange} />
              </Form.Group>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Form.Group>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control type="text" value={selectedButton} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" name="model" onChange={handleModelChange} />
          </Form.Group>

          <Row className="mb-3">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Group>
                <Form.Label>Mileage</Form.Label>
                <Form.Control type="text" name="mileage" onChange={handleMileageChange}  />
              </Form.Group>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Group>
                <Form.Label>fuel (L)</Form.Label>
                <Form.Control type="text" name="fuel" onChange={handlefuelChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3 d-flex justify-content-center  "  >
            <Col xs={12} sm={3} md={4} lg={6} xl={6}>
              <Button variant="secondary" className="w-100">Back</Button>
            </Col>
            <Col xs={12} sm={3} md={4} lg={6} xl={6} className="text-end">
              <Button type='submit' style={{background:'#0c3e9f'}} className="w-100">Validate</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AddCar;
