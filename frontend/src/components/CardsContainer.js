import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
const CardsContainer = ({children}) => {
  return (
    <>
      <Row  className='d-flex justify-content-center' >
        <Col md={10} lg={12} sm={12}
            style={{minHeight:'100vh'}} 
             >
           
          
                   <Row 
                   className=' p-5 justify-content-center  '
                    style={{marginTop:'5%'}}
                   >
                   
                        {children}
                   </Row>
        
        </Col>
      </Row>
    </>
  )
}

export default CardsContainer
