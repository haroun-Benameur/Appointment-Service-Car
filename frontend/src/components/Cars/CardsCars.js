import React, { useEffect, useState } from 'react'
import carsInfo from './CarsInfo'
import { Row, Col, Container, Button, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listCars } from '../../actions/CarActions'
import { listServices } from '../../actions/serviceActions'
import { useNavigate } from 'react-router-dom'
import {Card} from 'react-bootstrap'

const CardsCars = ({ children }) => {
  
  const navigate=useNavigate()
  const user=useSelector(state=>state.userLogin)
  const {userInfo}=user
  const {id}=userInfo
 

  const dispatch=useDispatch()
  const car=useSelector(state=>state.car)
  const {loading,cars,error}=car
  console.log(cars)
  
  const service=useSelector(state=>state.service)
  const {services}=service
  console.log(services)
  
  
 

  useEffect(() => {
      if (!userInfo) {
        navigate( '/login')
      }

    
  }, [userInfo,navigate]);

useEffect( ()=> {
  dispatch(listCars(id))
  
} ,[dispatch])

  return (
    <>
      <Row  
      style={{gap:'2%',minHeight:'80vh'}}
      className='mt-4 justify-content-center align-items-center'
      >
        {cars.map((item) => (
          <Col 
          key={item.id}
           xs={8} md={3} 
           style={{background:'#1e4658'}}
            className='mb-4 py-4 px-2'>
            
            <Container  >
              <Row className='justify-content-center '>
                <Col className='d-flex justify-content-center text-white' 
                xs={12} md={6}>
                  <div className='d-flex flex-column align-items-center py-3 '>
                    <h4 className='text-white' >{item.model}</h4>
                    <h5 className='text-white'>{item.matricule}</h5>
                    <Row>
                      <Col xs={5} md={7} lg={8} >
                        <i className='fa-solid fa-car'></i> {item.mileage}km
                      </Col>
                      <Col xs={5} md={7} lg={6} >
                        <i className='fa-solid fa-gas-pump'></i> {item.fuel}L
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className='d-flex justify-content-center' xs={12} md={4}>
                  <Image  src={item.image} alt={item.model} fluid />
               
                </Col>
                <Row 
                className='justify-content-center'
               
                
                >
                  <Col xs={7} sm={6}   md={8} lg={6} xl={5}  >
                    <button  className=' buttonModify w-100 h-100' >
                      modify
                    </button>
                  </Col>
                  <Col xs={7} sm={6} md={8} lg={6} xl={5} >
                    <button  className= ' buttonDelete w-100 h-100 ' 
                      
                    >
                      Delete
                    </button>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Col>
        ))}
      </Row>

      <Row > 
        <Col md={12} className='d-flex justify-content-end ' >

        <LinkContainer to='/login' 
         style={{Cursor:'pointer',color:'white',textAlign:'end'}} 
         className='p-4'>
        
        <h5 
             >
              
              {'\u003C'} back to login
  
        </h5>
        </LinkContainer>

        </Col>
  
  </Row>
    </>
  )
}

export default CardsCars
