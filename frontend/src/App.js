import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/Login/ForgotPassword';
import VerifyCode from './screens/Login/VerifyCode';
import ResetPassword from './screens/Login/ResetPassword';
import ConfirmReset from './screens/Login/ConfirmReset';
import Reclamation from './screens/Reclamation';
import Contact from './screens/Contact';
import HomeAccount from './screens/Account/HomeAccount';
import EditProfile from './screens/Account/EditProfile';
import ManageCars from './screens/Cars/ManageCars';
import SignUp from './screens/Login/SignUp';
import HomePage from './screens/HomePage';
import AddCar from './screens/Cars/AddCar';


const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Container fluid style={{background:'#040c18'}} >
          <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgetPassword" element={<ForgotPassword />} />
            <Route exact path="/Code" element={<VerifyCode />} />
            <Route exact path="/resetPassword" element={<ResetPassword/>} />
            <Route exact path="/confirmReset" element={<ConfirmReset/>} />
            <Route exact path="/reclamation" element={<Reclamation/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/homeAccount" element={<HomeAccount/>} />
            <Route exact path="/editProfile" element={<EditProfile/>} />
            <Route exact path="/homeAccount/manageCars/:id" element={<ManageCars/>} />
            <Route exact path="/homeAccount/manageCars/:id/addCar" element={<AddCar/>} />
            <Route exact path="/register" element={<SignUp/>} />
            

          </Routes>
        </Container>
      </>
    </Router>
  );
}

export default App;
