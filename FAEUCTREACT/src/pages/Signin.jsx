
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './signin.css';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      if (user != null) {
        navigate('/account');
      }

      
  }, [user]);

  return (
    <div className='container py-4' id="containersignin">
    <div className='d-flex ' id='azulsignin'>
    <div className='d-flex' id='centrosignin'>
    <h1>Conectate con:</h1>

    <GoogleButton onClick={handleGoogleSignIn} />
    </div>
    </div>

  </div>
  );
};

export default Signin;