import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './navbar.css';
import logouct from '../images/logo-uct.png'
import {admin, profesores} from '../components/firebase'

const Navbar = () => {

  class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }
  


  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container" id="header">
    <header className="py-1 px-1 border-bottom">
        <div className="container-fluid d-flex " >
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center py-3 col-lg-8   link-dark  dropdown-toggle show"  data-bs-toggle="dropdown">
                <img src={logouct} alt="?" id="logouct"/>
              </a>
              <ul className="dropdown-menu text-small shadow show" data-popper-placement="bottom-start">
                <li><Link to='/' className="dropdown-item active">FÆUCT</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to='/nosotros' className="dropdown-item">Quienes Somos</Link></li>
                <li><a className="dropdown-item" href='/contacto'>Contacto</a></li>
              </ul>
            <Timer/>
          </div>
          <div className='d-flex container-fluid py-5'>
          
          {user?.displayName ? (
                <button onClick={handleSignOut} className=" btn btn-primary" >Desconexion</button>
                ) : (
                <Link to='/signin'className="btn btn-primary ">Conectate!</Link>
                )}
          {user?.displayName ? (
              <Link to='/asignaturas' className="btn btn-primary">Asignaturas</Link>
                ) : (
               <button className='btn y' >Inicia sesion Para ver</button>
               )}
          {user?.displayName ? (
              <Link to='/home' className="btn btn-primary">Home</Link>
                ) : (
                <button className='btn y' >Inicia sesion Para ver</button>
                )}


          {user?.displayName ? (<div>
                      {profesores.includes(user?.uid) ? (<></>):(
                      <>   
              <Link to='/chat' className="btn btn-primary">Chat</Link>
              </>   
                   )}
                  </div>
                ) : (
                <button className='btn y' >Inicia sesion Para ver</button>
                )}



          {user?.displayName ? (<div>
            {profesores.includes(user?.uid) ? (<></>):(
            <>   
            <Link to='/grupos' className="btn btn-primary">Grupos</Link>
            </>     
            )}
              </div>
                ) : (
                <button className='btn y' >Inicia sesion Para ver</button>
                )}


              

          {user?.displayName ? (
              <Link to='/account' className="btn btn-primary"><img src={user.photoURL} alt="usuario" id="usuarito"/></Link>
                ) : (
                <button  className='btn y'>Inicia sesion para ver</button>
                )}
           {user?.uid === admin ?  (<Link to='/admin' className="btn btn-primary"> Panel de Control </Link> ) : (<div> </div> )}
           {profesores.includes(user?.uid) || user?.uid === admin ?  (<Link to='/panelprofesores' className="btn btn-primary"> Control de Asignaturas </Link> ) : (<div></div> )}
            
          </div>
          
        </div>
      </header>  
  </div>
  );
};

export default Navbar;