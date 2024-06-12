import React from 'react'

import { Row,Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const ConfirmReset = () => {
  return (
    <>
      <Row className=' d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
  
  <Col md={5} s={10} lg={6} style={{margin:'5%'}}  >
       
        <Container  
          className='p-4 d-flex align-items-center justify-content-center'
          style={{background:'#061633',minHeight: '60vh', flexDirection:'column',borderRadius:'4%'}} >
      
            <h4 
            style={{color:'white'}}
            > Your Password has been reseted </h4>
     
      

          <Button 
          className=' mx-3'
          style={{backgroundColor:'#0C3E9F',marginTop:'4%',width:'50%'}} 
          >
              <LinkContainer to='/login' style={{color:'white'}} >
                <h6 >Go to Login Page</h6>
              </LinkContainer>
        
        </Button>

         
           
      </Container>
  </Col>
</Row>
    </>
  )
}

export default ConfirmReset
