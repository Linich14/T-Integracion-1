import React from 'react';
import { auth } from '../components/firebase'
import { UserAuth } from '../context/AuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import Photo from './fotosperfil'
import './cuenta.css';
import { getAuth, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




const Account = () => {


  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [texto, setTexto] = useState(false);
  const auth = getAuth();
  if (!texto) { } else {
    updateProfile(auth.currentUser, {
      displayName: texto
    }).then(() => {
      console.log(texto)
    }).catch((error) => {
      console.log(error)
    })
  };
  const [foto, setfoto] = useState(false);

  var a = foto
  if (!foto) { } else {
    updateProfile(auth.currentUser, {
      photoURL: a
    })
  }


  return (
    <div className="container container-fluid" id="cuenta">
      <div id='main' className='d-flex flex-column align-items-center justify-content: center '>
        <h1>Perfil</h1>
        <Photo url={user?.photoURL} />
        <div id='nombre'>
          <p>Bienvenido, {user?.displayName}</p>
        </div>
      </div>
      <div id='mid' className='d-flex'>
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
      <div>
        <form onSubmit={ev => {
          ev.preventDefault();
          setTexto(ev.target.username.value);
        }}>
          <h3>Actualizar datos</h3>
          <br />
          <input type="text" placeholder='Nombre' name='username' />
          <br />
          <br />
          <button type='submit'>Actualizar Nombre</button>
        </form>
        <br />
        <form onSubmit={ev => {
          ev.preventDefault();
          setfoto(ev.target.photo.value);
        }}>
          <p>Cambio de imagen: <input type="text" name="photo" placeholder='url de la imagen' /></p>
          <br />
          <button type='submit'>Actualizar Imagen de Perfil</button>
        </form>
        <p>*Para ver los datos actualizados se tiene que desconectar y volver a conectar</p>
      </div>
      <button onClick={handleSignOut} >
        Desconexion
      </button>
    </div>
  );

};

export default Account;