import React,{useState,useEffect} from 'react'
import { Row, Col, Button, FormGroup, FormLabel, FormControl, Container } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer';
import { Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Google } from 'react-bootstrap-icons';
const ForgetPassword = () => {
    
    const[email, setEmail] = useState('')
    const[telephone, setTelephone] = useState('')
 
    
    const submitHandler = (e) => {
        e.preventDefault();
        alert("You have submitted the form")
      }
  return (
    <>
 
 <FormContainer>
 <Link

to='/login'

>
  
  <h5 
  style={{Cursor:'pointer',color:'white',textAlign:'end'}} 
  className='p-4'>
  
  {'\u003C'} back to login
  
  </h5>

</Link>   
        <h1
         style={{ color: 'white', textAlign: 'center', marginBottom: '10%' ,color:'white'}}>
            forgot your password 
            </h1>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >Email or phone number</FormLabel>
            <FormControl
              placeholder='Enter your email'
              value={email}
              name="email"
              style={{ borderRadius: '10px', }}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormGroup>

          

          

          <Button 
          style={{ background: '#0C3E9F' ,marginTop:'2%',borderRadius:'10px'}}
           type='submit' 
           className='w-100'>
            send
        </Button>
        </Form>

        <h6  
        style={{ color: 'white', textAlign: 'center', margin: '7%'}}
         >
          or continue with </h6>

        <Container
        className="d-flex align-items-center justify-content-center" 
        style={{ background: 'white',width:'20%'}}>

        <Button 
        style={{
          background:'transparent',
          marginBottom:'2%',
          borderRadius:'10px'}} >
        <i class="fab fa-google fa-2x"></i>
       
        </Button>
        </Container>

      </FormContainer>

    </>
  )
}

export default ForgetPassword
