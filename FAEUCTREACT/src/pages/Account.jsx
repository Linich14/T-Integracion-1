import React from 'react';

import { UserAuth } from '../context/AuthContext';

import './cuenta.css';


const Account = () => {
  const { logOut, user } = UserAuth();

  const Photo = () =>{
    const photo = user?.photoURL;
    return photo;
  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="cuenta">
      <h1  >Cuenta</h1>
      <div>
      <img src={Photo()} alt="?" ></img>
        <p>Bienvenido, {user?.displayName}</p>
      </div>
      
      <button onClick={handleSignOut} >
        Desconexion
      </button>
    </div>
  );
  
};

export default Account;