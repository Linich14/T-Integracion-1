import React from 'react';
import { Navigate, Link} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

// esta funcion evita que un usuario sin ingresar pueda acceder a las otras paginas , 
//  lo redirije directamente al root o index
 
const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (user === null) {
    return <Navigate to='/'/>;
  }
  return children;
};

export default Protected;