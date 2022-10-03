import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './navbar.css';
import logouct from '../images/logo-uct.png'

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
    <header className="py-1 px-1 border-bottom">
        <div className="container-fluid d-grid " >
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" >
                <img src={logouct} alt="?"/>
              </a>
              <ul className="dropdown-menu text-small shadow show" data-popper-placement="bottom-start">
                <li><a className="dropdown-item active" href="#" aria-current="page">FAUCT</a></li>
                <li><a className="dropdown-item" href="#">Inicio</a></li>
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Quienes Somos</a></li>
                <li><a className="dropdown-item" href="#">Contacto</a></li>
              </ul>
          </div>
          {user?.displayName ? (
                <button onClick={handleSignOut} className="w-50 btn btn-primary" >Desconexion</button>
                ) : (
                <Link to='/signin'>Conectate!</Link>
                )}
            
          {user?.displayName ? (
              <Link to='/' className="w-50 btn btn-primary">Home</Link>
                ) : (
                <button>Inicia Sesion</button>
                )}
          {user?.displayName ? (
              <Link to='/account' className="w-50 btn btn-primary">Cuenta</Link>
                ) : (
                <button>Inicia Sesion</button>
                )}
        </div>
      </header>  
  </div>
  );
};

export default Navbar;