import React from 'react'
import { Row,Image ,Col, Container} from 'react-bootstrap'
import img from '../../assets/images/profile.png'
import { Link } from 'react-router-dom'
const HeaderEditProfile = () => {
  return (
    <>
      <Row  >
        <Container 
         className='d-flex ' 
         style={{justifyContent:'space-between'}} 
            
        > 
        <Col  md={6} 
            className=' px-4 d-flex align-items-center'
        >

            <h1  >
            <Link to='/homeAccount' style={{textDecoration:'none',color:'white'}} >
            {'\u003C'}  Edit profile
            </Link>
            
            </h1> 
        </Col>
            <Col md={6}  
                 className='d-flex align-items-center'
                style={{justifyContent:'end'}}
           >
                <Image 
                    src={img}
                    alt='profile user'
                    style={{minWidth:'4em',maxWidth:'5em'}}
                /> 
            </Col>
        </Container>
      </Row>
    </>
  )
}

export default HeaderEditProfile
