import {React} from 'react';
import './home.css';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import ShowPHome from './ShowPHome';

const Home = () => {

  return (
    <div className=' container'>
      <div className='row'>
        <div className='col-2'>
        <br /><br /><br /><br />
      <Link to="/posts" className='btn btn-primary'>Hacer una publicación</Link>
      <Menu className='sticky-bottom'style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}/>
    </div>
    
    <div className='col-10'>
    <main className='' id='body'>
      
        <div className="Articulo-mayor">
          <div>
            <ShowPHome/>
          </div>
      </div> 
    </main>
    </div>
    </div>
    </div>
  )
}

export default Home
