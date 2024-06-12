import React, { useEffect } from 'react';
import HeaderEditProfile from '../../components/EditProfile/HeaderEditProfile';
import { Row } from 'react-bootstrap';
import FormProfile from '../../components/EditProfile/FormProfile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditProfile = () => {

  const navigate=useNavigate()
  const user=useSelector(state=>state.userLogin)
  const {error,userInfo,loading}=user
 

  useEffect(() => {
      if (!userInfo) {
        navigate( '/login')
      }

     
   
    
  }, [userInfo,navigate]);


  return (
    <Row
      className=''
      style={{ background: '#001d58' }}
    >
      <HeaderEditProfile />
      <FormProfile />
    </Row>
  );
};

export default EditProfile;
