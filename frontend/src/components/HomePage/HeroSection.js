import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate


const HeroSection = () => {
  const navigate = useNavigate(); // Use navigate hook

  const handleCreateAccountClick = () => {
    navigate('../createaccountcomps/Createaccount1'); // Navigate to the desired path
  };

  return (
    <div className="container-fluid"  >
      <div className="container-fluid bg-image">
        <div className='carcare'>
          <h1 className='text-white'>CarCare B&B</h1>
          <p className='text-white fs-4'>We offer a range of services to meet your needs</p>
          <div className='btns'>
            <button onClick={handleCreateAccountClick} className='btn btn-custom mt-2'>Create an account</button>
            <button className='btn btn-custom mt-2'>Log in</button>
          </div>
          <p className='mt-2'><a className="link" href="#">Explore our services</a></p>
        </div>
      </div>

      <div className="container-fluid carbrands"> 
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 mt-5">
            <img src="src\assets\Brand.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
