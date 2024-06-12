import React, { useEffect } from 'react'
import { Card, Row,Col,Container } from 'react-bootstrap'
import Cards from '../../components/HomeAccount/Cards'
import CardsContainer from '../../components/CardsContainer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomeAccount = () => {

  const navigate=useNavigate()
  const user=useSelector(state=>state.userLogin)
  const {error,userInfo,loading}=user
 

  useEffect(() => {
      if (!userInfo) {
        navigate( '/login')
      }

     
   
    
  }, [userInfo,navigate]);

  return (
    <>
      <CardsContainer>
            <Cards/>
      </CardsContainer>
    </>
  )
}

export default HomeAccount
