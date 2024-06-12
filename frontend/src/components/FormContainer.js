import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'


const FormContainer = ({children}) => {
  return (

    <Row 
    className=' d-flex align-items-center justify-content-center' 
    style={{ minHeight: '100vh' }}>

      <Col md={5} s={10} lg={6} style={{margin:'5%'}}  >
   
          <Container    style={{background:'#061633',borderRadius:'4%'}} >
   
               <Row className=' formContainer d-flex align-items-center justify-content-center'  >
      
                  <Col  className="  p-4  " xs={12} md={10} >
           

                    {children}

         
                   </Col>
                </Row>

          </Container>
      </Col>
</Row>
    
  )
}

export default FormContainer
