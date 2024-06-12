import React,{useState,useEffect} from 'react'
import { Row, Col, Button, FormGroup, FormLabel, FormControl, Container } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import { Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Google } from 'react-bootstrap-icons';
import axios from 'axios';
import { Await, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/UserActions';
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  
  const user=useSelector(state=>state.userLogin)
  const {error,userInfo,loading}=user
 

  

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password))
    
    
    
    if (!loading) {
      navigate('/');
    }
    
  }

          useEffect(() => {
            if (userInfo) {
              navigate( '/')
              
            }
        
          
        }, [userInfo,navigate]);
  return (
    <>
      <FormContainer>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>Login</h1>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >Email</FormLabel>
            <FormControl
              placeholder='Enter your email'
              value={email}
              name="email"
              style={{ borderRadius: '10px' }}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >Password</FormLabel>
            <FormControl
              placeholder='Enter your password'
              value={password}
              name="password"
              className='w-100'
              style={{ borderRadius: '10px' }}
              type='password'
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormGroup>

          <LinkContainer to='/forgetPassword' className='mb-3' style={{ color: 'white' }} >
            <a>Forgot password</a>
          </LinkContainer>

          <Button style={{ background: '#0C3E9F' ,marginTop:'2%',borderRadius:'10px'}} type='submit' className='w-100'>Log In</Button>
        </Form>

        <h6  style={{ color: 'white', textAlign: 'center', margin: '7%',}} >or continue with </h6>

        <Container  className="d-flex align-items-center justify-content-center" style={{ background: 'white',width:'20%'}}>

        <Button style={{background:'transparent',marginBottom:'2%',borderRadius:'10px'}} >
        <i class="fab fa-google fa-2x"></i>
       
        </Button>
        </Container>

     
         <Row style={{marginTop:'2%'}} > 
          <Container style={{gap:'3%'}} className="d-flex align-items-center justify-content-center" >

            <h7 style={{color:'white'}}>don't have an account yet ?</h7>
         <LinkContainer to='register' >
            <a ><span style={{color:'white',textDecoration:'underline'}}  > Register for free </span></a>
        </LinkContainer> 

          </Container>

        
      
        </Row> 
        
       

        
      
      </FormContainer>
    </>
  )
}

export default Login
