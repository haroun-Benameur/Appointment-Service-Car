import React, { useEffect, useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import FormContainer from '../../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/UserActions';

const SignupPage = () => {
  // State variables for form fields
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userRegister=useSelector((state) => state.userRegister)
  const {loading,error,userInfo}=userRegister
  console.log(userInfo)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect( ()=> {
    if (userInfo) {
      navigate('/login')
    }
  } ,[navigate,userInfo])

  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(register(
      email,userName ,firstName, password,
       lastName, about,address, contactNumber, city, state, 
       ));

        navigate('/login') 
        
  };

  return (
    <FormContainer>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>Signup</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Email Address</FormLabel>
          <FormControl
            placeholder='Enter your email'
            value={email}
            name="email"
            style={{ borderRadius: '10px' }}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Username</FormLabel>
          <FormControl
            placeholder='Enter your username'
            value={userName}
            name="userName"
            style={{ borderRadius: '10px' }}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>First Name</FormLabel>
          <FormControl
            placeholder='Enter your first name'
            value={firstName}
            name="firstName"
            style={{ borderRadius: '10px' }}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Last Name</FormLabel>
          <FormControl
            placeholder='Enter your last name'
            value={lastName}
            name="lastName"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>About</FormLabel>
          <FormControl
            placeholder='Tell us about yourself'
            value={about}
            name="about"
            as="textarea"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setAbout(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Address</FormLabel>
          <FormControl
            placeholder='Enter your address'
            value={address}
            name="address"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Contact Number</FormLabel>
          <FormControl
            placeholder='Enter your contact number'
            value={contactNumber}
            name="contactNumber"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>city</FormLabel>
          <FormControl
            placeholder='city'
            value={city}
            name="city"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>state</FormLabel>
          <FormControl
            placeholder='state'
            value={state}
            name="state"
            style={{ borderRadius: '10px' }}
            onChange={(e) => setState(e.target.value)}
          />
        </FormGroup>


        <FormGroup className="mb-3">
          <FormLabel style={{ color: 'white' }}>Password</FormLabel>
          <FormControl
            placeholder='Enter your password'
            value={password}
            name="password"
            style={{ borderRadius: '10px' }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button style={{ background: '#0C3E9F', marginTop: '2%', borderRadius: '10px' }} type='submit' className='w-100'>Signup</Button>
      </Form>

      <h6 style={{ color: 'white', textAlign: 'center', margin: '7%', }} >or continue with </h6>

      <Container className="d-flex align-items-center justify-content-center" style={{ background: 'white', width: '20%' }}>

        <Button style={{ background: 'transparent', marginBottom: '2%', borderRadius: '10px' }} >
          <i className="fab fa-google fa-2x"></i>

        </Button>
      </Container>

      <Row style={{ marginTop: '2%' }}>
        <Container style={{ gap: '3%' }} className="d-flex align-items-center justify-content-center" >

          <h6 style={{ color: 'white' }}>don't have an account yet ?</h6>
          <LinkContainer to='register' >
            <a ><span style={{ color: 'white', textDecoration: 'underline' }}  > Register for free </span></a>
          </LinkContainer>

        </Container>
      </Row>
    </FormContainer>
  );
};

export default SignupPage;
