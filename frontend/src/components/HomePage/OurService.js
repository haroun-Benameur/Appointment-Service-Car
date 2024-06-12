import React, { useEffect } from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listServices } from '../../actions/serviceActions';
import ServiceCard from './ServiceCard';
const OurService = () => {
 const dispatch=useDispatch()   
const service=useSelector(state=>state.service)
  const {services}=service
  console.log(services)

  useEffect( ()=> {
    dispatch(listServices())
  } ,[dispatch] )
  return (
    <>
    
    <Container id="service"
      fluid 
      className="d-flex justify-content-center " 
      style={{flexDirection:'column',marginTop:'5%'}}
      >
          <Row>
            <Col md={12} 
            className='d-flex flex-column  '
            style={{textAlign:'center'}}    
             >
                <h2 className="text-white" >our services</h2>
                <h5 className="text-white" >Don't waste time, get it done: Choose our convenient services</h5>
          
            </Col>
          </Row>

      </Container>

          <Row className='justify-content-center mt-5 ' >
            
              <ServiceCard/>
          
          
          </Row>
      
    </>
  )
}

export default OurService
