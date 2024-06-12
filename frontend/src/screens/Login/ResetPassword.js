import React,{useState,useEffect} from 'react'
import { Row, Col, Button, FormGroup, FormLabel, FormControl, Container } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import { Form } from 'react-bootstrap';

const ResetPassword = () => {

    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
 
    
    const submitHandler = (e) => {
        e.preventDefault();
        alert("You have submitted the form")
      }
  return (
    <>
        <FormContainer>

        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>Reset Password</h1>
       
        <p   
            style={{color:'#61DAFB'}}
            >
                Your previous password has been reseted. Please set a new password for your account.
        </p>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >password</FormLabel>
            <FormControl
              placeholder='Enter your password'
              value={password}
              name="password"
              style={{ borderRadius: '10px' }}
              onChange={(e)=>setPassword(e.target.value)}
              type='password'
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >confirm Password</FormLabel>
            <FormControl
              placeholder='Enter your password'
              value={confirmPassword}
              name="ConfirmPassword"
              className='w-100'
              style={{ borderRadius: '10px' }}
              type='password'
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </FormGroup>

        

          <Button style={{ background: '#0C3E9F' ,marginTop:'2%',borderRadius:'10px'}} type='submit' className='w-100'>Set password</Button>
        </Form>

  
      </FormContainer>
    </>
  )
}

export default ResetPassword
