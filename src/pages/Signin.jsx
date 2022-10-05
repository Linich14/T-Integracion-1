
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
    <div className='container ' id="containersignin">
    <h1 >Conectate con:</h1>
    <div id="googleo">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  </div>
  );
};

export default Signin;