import React,{useState,useEffect} from 'react'
import { Row, Col, Button, FormGroup, FormLabel, FormControl, Container } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Reclamation = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const navigate=useNavigate()
    const user=useSelector(state=>state.userLogin)
    const {error,userInfo,loading}=user
   
  
    useEffect(() => {
        if (!userInfo) {
          navigate( '/login')
        }
  
       
     
      
    }, [userInfo,navigate]);
  
    const submitHandler = (e) => {
      e.preventDefault();
      alert("You have submitted the form")
    }
  return (
    <>
      <FormContainer>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '10%' }}>reclamation</h1>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3">
            <FormLabel style={{color:'white'}} >N° Rdv: </FormLabel>
            <FormControl
              placeholder='your appointment'
              value={email}
              name="rdv"
              style={{ borderRadius: '10px' }}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormGroup>

            <Row 
            className='d-flex'
            style={{gap:'15%'}}
             >
                <Col md={4} lg={5} sm={4}  >
                    
                        <FormLabel 
                         style={{color:'white'}}
                         
                        >Immatricule: 
                        
                        </FormLabel>
                        <FormControl  
                            style={{minWidth:'6rem'}}
                        type="text" placeholder='(4 chiffres)'  required/>
                    
                </Col>

                <Col md={4} lg={5} sm={4} >
                   
                        <FormLabel
                         style={{color:'white'}}
                         >
                            Tun:
                            </FormLabel>
                        <FormControl  
                        type="text" 
                        placeholder='(3 chiifres)' 
                         required
                         style={{minWidth:'6rem'}} 
                         />
                  
                </Col>

            </Row>



        <FormGroup>
            <FormLabel style={{color:'white'}}>reclamation</FormLabel>
            <FormControl
                type='textarea'
                name='message'
                placeholder='Your reclamation here...'
                as='textarea'
                rows={5}
                
            >
                
            </FormControl>

        </FormGroup>
          <Button style={{ background: '#0C3E9F' ,marginTop:'2%',borderRadius:'10px'}} 
          type='submit' className='w-100'>done</Button>
        </Form>

      </FormContainer>
    </>
  )
}

export default Reclamation
