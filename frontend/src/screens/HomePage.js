import { Row, Col, Container, Button } from "react-bootstrap";
import image from '../assets/images/carBackground.png';
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import OurService from "../components/HomePage/OurService";
import ServiceCard from "../components/HomePage/ServiceCard";
import Choose from "../components/HomePage/Choose";
import Footer from "../components/Footer";

const HomePage = () => {
  const {userInfo}=useSelector(state=>state.userLogin)
  return (
    <>
      <Container fluid
        className="d-flex justify-content-center "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position:'relative',
          minHeight: '92vh',
          
        }}>

        <Row className="justify-content-center" >
          <Col md={5} xs={10} sm={8} 
          style={{
            position:'absolute',
            top:'40%',
            left:'50%',
            transform: 'translate(-50%, -50%)'
          }}
          >
            <Row 
            
            >
              <Col md={12}
                className="d-flex justify-content-center align-items-center mb-4 " >
                <h1 
                
                className="text-white">CarCare B&B</h1>
              </Col>

              <Col md={12}>
                <h2 className="text-white">We offer a range of services to meet your needs</h2>
              </Col>

              <Col   md={12}>

                {!userInfo? 
                
                <Row style={{marginTop:'5%',gap:'5%'}} >

                <LinkContainer to='/register'>

              <Col md={6} className="d-flex justify-content-center">
                <Button style={{background:'#011948'}}>create an account</Button>
              </Col>

                </LinkContainer>


              <Col md={5}    className="d-flex justify-content-center">
                
                <LinkContainer style={{background:'#011948'}} to='/login' >
                
                <Button className=""
                >
                  login

                </Button>

                </LinkContainer>
              </Col>

              </Row>
                : <></> }

               
              </Col>

              <Col md={12} style={{marginTop:'5%'}}  >
                <h6  ><a style={{color:'#61DAFB'}} href="#service" > explore our service </a></h6>
              </Col>
            </Row>


          </Col>
        </Row>

      </Container>

     <OurService/>

     <Container style={{marginTop:' 10%',marginBottom:'10%' }} >

            <Row className="justify-content-center" >
              <Col md={8}>
                  <Choose/>
              </Col>
            </Row>

     </Container>

     <Footer/>

  
    
     
    </>
  );
};

export default HomePage;
