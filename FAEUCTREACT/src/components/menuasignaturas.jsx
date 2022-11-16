import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const menuasignaturas = () => {
  const { user } = UserAuth();
  return (
    <div>
            <menu className=' container rounded py-4 ' >
          <ul className='row'>
            <span className='row' >Menu Profesores</span>
            
               <li className='row py-1'> <hr /> {user?.displayName ? (
              <Link to='/home' className=" btn btn-primary ">Home</Link>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li>
                
         <li className='row py-1'> {user?.displayName ? (
              <a href="https://webmail.uct.cl"className=" btn btn-primary">Webmail</a>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li>
                      <li className='row py-1'>   {user?.displayName ? (
              <a href="https://estudiantes.uct.cl"className=" btn btn-primary">Portal Estudiante</a>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li> 
          <li className='row py-1'> {user?.displayName ? (
              <Link to='/asignaturas' className=" btn btn-primary">Asignaturas</Link>
                ) : (
                <button  className='row btn y'>Inicia sesion para ver</button>
                )}
                </li>  
            </ul>
          </menu>
          
    </div>
  )
}

export default menuasignaturas