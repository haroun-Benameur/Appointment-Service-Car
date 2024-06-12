import React,{useState,useEffect} from 'react'
import { Row, Col, Button, FormGroup, FormLabel, FormControl, Container } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer';
import { Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const VerifyCode = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        alert("You have submitted the form")
      }

  return (
    <>
      <FormContainer>
      <h5 
              style={{Cursor:'pointer',color:'white',textAlign:'end'}} 
              className='p-4'>
              
              {'\u003C'} back to login
              
              </h5> 
              
        <h1
         style={{ color: 'white', textAlign: 'center', marginBottom: '10%' ,color:'white'}}>
            verify code
            </h1>

        <h5  style={{ color: 'white', textAlign: 'left', marginBottom: '7%' ,color:'#61DAFB'}}>An authentication code has been sent to your email.</h5>    
        <Form onSubmit={submitHandler}>
         
         <Row className=' d-flex align-items-center justify-content-center' >
                
                    <Col  sm={12} md={12} lg={12}  
                    style={{textAlign:"center"}} >
                        <FormLabel 
                     
                        
                        >
                        <h5 
                           style={{color:'white',
                           
                          }} >
                        
                        code
                        </h5>    
                        </FormLabel> 
                    </Col>    
                    
                    <Col  md={3} sm={3} xs={3}  >
                   
                    <FormControl 
                            placeholder='_'
                            name='code'
                            type="text"
                            style={{background:'transparent',border:'1px solid white'}}
                            
                            required >
                            


                        </FormControl>
                    </Col>

                    <Col  md={3} sm={3} xs={3}>
                   
                    <FormControl 
                            placeholder='_'
                            name='code'
                            type="text"
                            style={{background:'transparent',border:'1px solid white'}}
                            required >
                            


                        </FormControl>
                    </Col>

                    <Col  md={3}sm={3} xs={3} >
                   
                    <FormControl 
                            placeholder='_'
                            name='code'
                            type="text"
                            style={{background:'transparent',border:'1px solid white'}}
                            required >
                            


                        </FormControl>
                    </Col>

                    <Col  md={3} sm={3} xs={3} >
                   
                    <FormControl 
                            placeholder='_'
                            name='code'
                            type="text"
                            style={{background:'transparent',border:'1px solid white',}}
                            required >
                            


                        </FormControl>
                    </Col>
                      
                    
               

         </Row>

          <Button style={{ background: '#0C3E9F' ,marginTop:'5%',borderRadius:'10px'}} type='submit' className='w-100'>
            send
        </Button>
        </Form>

       

       

        <Row style={{marginTop:'4%'}} > 
          <Container style={{gap:'3%'}} className="d-flex align-items-center justify-content-center" >

            <h7 style={{color:'white'}}>didin't recieve th code ?</h7>
         <LinkContainer to='' >
            <a ><span style={{color:'white',textDecoration:'underline'}}  > Resend</span></a>
        </LinkContainer> 

          </Container>

        
      
        </Row> 

      </FormContainer>

    </>
  )
}

export default VerifyCode
