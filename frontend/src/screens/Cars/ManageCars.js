import React, { useEffect } from 'react'
import HeaderManageCars from '../../components/Cars/HeaderManageCars'
import CardsContainer from '../../components/CardsContainer'
import CardsCars from '../../components/Cars/CardsCars'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ManageCars = () => {

  
  return (
    <Container fluid >
    
    <HeaderManageCars/>
    <CardsCars/>
    
    </Container>
    
      
  )
}

export default ManageCars
