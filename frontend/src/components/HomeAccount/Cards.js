import React from 'react'
import CardsTab from './CardsTab'
import { Col, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cards = () => {
  const navigate=useNavigate()
  const {userInfo}=useSelector(state=>state.userLogin)
  const {id}=userInfo
  
  return (
    <>
      {CardsTab.map((item, index) => (
        <Col key={index} md={10} lg={4} sm={8} className='mb-3 '>
          <Card 
          style={{borderRadius:'2em'}}
          className= ' py-5 h-100 d-flex flex-column justify-content-center' bg="secondary" text="black">
            
              <div className='d-flex flex-column h-100 '>
                <Card.Img src={item.image} alt='' style={{ maxWidth: '50%', alignSelf: 'center' }} />
              </div>
             

                <Card.Body className='d-flex flex-column justify-content-center align-items-center flex-grow-1'>
                  <Card.Title 
                  style={{textAlign:'center'}}
                  as="h4">
                    {item.title}
                    
                    </Card.Title>
                  
                  <Card.Text as="p">{item.text}</Card.Text>
                </Card.Body>

                <div className='d-flex justify-content-center mb-3'>
                  <LinkContainer to={item.url}
                  style={{backgroundColor:'#0C3E9F',borderRadius:'1em'}}
                  >
                  
                  <Button 
                   
                   >

                    {item.button}</Button>
                  </LinkContainer>
                </div>
             
           
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Cards
