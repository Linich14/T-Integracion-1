import React from 'react';
import { auth } from '../components/firebase'
import { UserAuth } from '../context/AuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import Photo from './fotosperfil'
import './cuenta.css';





const Account = () => {
  

  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="container container-fluid" id="cuenta">
      <div id='main' className='d-flex flex-column align-items-center justify-content: center '>
        <h1>Perfil</h1>
        <Photo url={user?.photoURL}/>
        <div id='nombre'>
          <p>Bienvenido, {user?.displayName}</p>
        </div>
      </div>
      <div id='mid' className='d-flex align-items-center'>
        <div id='lista' className='d-flex'>
          <ul>
            <li>
              <h5>Materias</h5>
              <ul>
                <li>Mantención y Adm. de Sistemas 2022-2-S2</li>
                <li>INFO1118-Desarrollo Web-2022-Sem2-S1</li>
                <li>Materia</li>
                <li>Materia</li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='tel' className='d-flex'>
          <ul>
            <li>
              <h5>Informacion de contacto</h5>
              <ul>
                <li>numero: +569231231231</li>
                <li>Direccion de correo: <a href="#">{user?.email}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex  flex-column align-items-center'>
        <h4>Calificaciones</h4>
        <table id="tabla">
          <tr>
            <th>      </th>
            <th>nota 1</th>
            <th>nota 2</th>
            <th>nota 3</th>
          </tr>
          <tr>
            <td>materia1</td>
            <td>nota1</td>
            <td>nota2</td>
            <td>nota 3</td>
          </tr>
          <tr>
            <td>materia2</td>
            <td>nota 1</td>
            <td>nota 2</td>
            <td>nota 3</td>
          </tr>
          <tr>
            <td>materia2</td>
            <td>nota 1</td>
            <td>nota 2</td>
            <td>nota 3</td>
          </tr>
        </table>
      </div>
      <button onClick={handleSignOut} >
        Desconexion
      </button>
    </div>
  );

};

export default Account;