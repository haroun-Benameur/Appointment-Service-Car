import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { ArrowBarDown } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGOUT } from '../constants/UserConstants';
import { logout } from '../actions/UserActions';
import logo from '../assets/images/logo.png'

function Header() {
  const navigate=useNavigate()
  const {userInfo}=useSelector((state)=>state.userLogin)
  const dispatch=useDispatch()
  
  const logoutHandler=()=> {
    dispatch(logout())  
  }
    
  return (
    <Navbar expand="lg" style={{backgroundColor:'#061633'}} >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt='Logo' height='50px' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand  style={{color:'white'}} href="/">carCare b&b</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer style={{color:'white'}}  to='/'>
            
            <Nav.Link>Home</Nav.Link>
            
            </LinkContainer>
            
            <LinkContainer style={{color:'white'}} to='/contact' >
            
            <Nav.Link  >contact us</Nav.Link>
            
            </LinkContainer>
            
            <LinkContainer style={{color:'white'}}  to='/about' >
            
            <Nav.Link  >about us</Nav.Link>
            
            </LinkContainer>

            {

            userInfo? <NavDropdown title={
            <i  style={{color:'white'}} 
            className="bi bi-chevron-compact-down">
              <span style={{color:'#61DAFB'}} >{userInfo.username}</span></i>
            }  >
               
            <LinkContainer to="/homeAccount">
            
             <NavDropdown.Item  >profile</NavDropdown.Item>
           
            </LinkContainer>
          
           
             <LinkContainer to='/' >
             
             <NavDropdown.Item onClick={logoutHandler}>logout</NavDropdown.Item>
             
             </LinkContainer>
           
         </NavDropdown>
            :

            <LinkContainer  style={{color:'white'}}  to='/login' >
            
            <Nav.Link  href="#link">login</Nav.Link>
            
            </LinkContainer>

            }

            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;