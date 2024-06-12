import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../../actions/UserActions';


const FormProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setAddress(user.address);
      setContactNumber(user.contact_number);
      setAbout(user.about);
      setCity(user.city);
      setState(user.state);
      setPassword(user.password);
    }
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        updateUserProfile({
          id: user.id,
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          contact_number: contactNumber,
          city,
          state,
          address,
          about,
        })
        

      );
      console.log("Updated successfully0");
      navigate('/')
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={9}>
          
            <Form onSubmit={submitHandler} >
              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
                  <Form.Control 
                  type="text" 
                  name='firstName'
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} />
                </Col>
                <Col>
                  <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
                  <Form.Control 
                  type="text"
                  name='lastName'
                   value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                  <Form.Control
                   type="text" 
                   value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>Address</Form.Label>
                  <Form.Control type="text"
                   value={address}
                    name='address'
                    onChange={(e) => setAddress(e.target.value)} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>Contact Number</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="contactNumber"
                  value={contactNumber} 
                  onChange={(e) => setContactNumber(e.target.value)} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>about</Form.Label>
                  <Form.Control 
                  type="text"
                   value={user.about}
                   name="about"
                  onChange={(e) => setAbout(e.target.value)} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>City</Form.Label>
                  <Form.Control
                   type="text"
                    value={city} 
                    name="city"
                    onChange={(e) => setCity(e.target.value)} />
                </Col>
                <Col>
                  <Form.Label style={{ color: 'white' }}>State</Form.Label>
                  <Form.Control
                  type="text" 
                  value={state} 
                  name="state"
                  onChange={(e) => setState(e.target.value)} />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                  <Form.Control 
                  type="password"
                  name="password"
                   value={password} onChange={(e) => setPassword(e.target.value)} />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col className="d-flex justify-content-end">
                  <LinkContainer to="/homeAccount">
                    <Button>CANCEL</Button>
                  </LinkContainer>
                </Col>
                <Col className="d-flex justify-content-start">
                  
                    <Button type='submit' >done</Button>
                  
                </Col>
              </Row>
            </Form>
          
        </Col>
      </Row>
    </Container>
  );
};

export default FormProfile;
