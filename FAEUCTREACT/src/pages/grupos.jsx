import React from 'react'
import Menu from '../components/Menu'
import './grupos.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Photo from './fotosperfil'


const grupos = () => {
  const { user } = UserAuth();
  return (
<div>
<br /><br /><br /><br />
<div className='container'> 

<div className='row'>
    <div className='col-2'>
        <br /><Menu/></div>
    <div className='col-10'>
        <div className='row rounded'style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}>
            <div className=''>
            <h2>Ingrese su nuevo posteo</h2>
                <form action="">
                    <textarea name="" id="" cols="100" rows="5"></textarea>
                    
                </form>
                <button className='btn btn-primary'  >Publicar</button>
                <hr />
            </div>
        </div>
        <br />
        <div className='row rounded' style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}>
            <h1>aqui van los posteos</h1>
            <div className='py-1' style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}>
             <Photo url={user?.photoURL} className="avatar" /><pre><h2>mucho texto del post</h2></pre>
             <Photo url="https://imgur.com/oxiFX0j" />
            </div>
            <hr />
            <div className='py-1' style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}>
               
             <Photo url={user?.photoURL} className="avatar"/><pre><h2>mucho texto del post</h2></pre>
             <Link to="https://imgur.com">
                <Photo url="https://i.imgur.com/oxiFX0j.jpg" />
             </Link>
             
            </div>
        </div>
    </div>
</div>

      
</div>
</div>
  )
}

export default grupos