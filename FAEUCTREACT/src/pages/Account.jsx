import React from 'react';
import {auth} from '../components/firebase'
import { UserAuth } from '../context/AuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';

import './cuenta.css';



const Photo = () =>{
  const [user] = useAuthState(auth);
  const photo = user.photoURL;
  return photo;
}

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };



  console.log(Photo());
  return (
    <div className="container"id="cuenta">
      <h1  >Cuenta</h1>
      <img src={Photo()} alt="?" ></img>
      <div>
        <p>Bienvenido, {user?.displayName}</p>
      </div>
      
      <button onClick={handleSignOut} >
        Desconexion
      </button>
    </div>
  );
  
};

export default Account;