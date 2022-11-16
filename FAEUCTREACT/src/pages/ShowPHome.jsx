import {React, useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore';

import {db} from '../components/firebase';
import './posts.css';
import { Link } from 'react-router-dom';


function ShowPHome() {
    const [posts, setPost] = useState([])

    useEffect(()=>{
  
      showPost()
  
    }, [])

    useEffect(()=>{
        console.log(posts)

    }, [posts])
  
    function showPost (){
  
      const postCollection = collection(db, 'post-home')
      getDocs(postCollection)
        .then(response => {
            const pst = response.docs.map(doc=> ({
                data: doc.data(),
                id: doc.id,
            }))
            setPost(pst)
        })
        .catch(error => console.log(error.mensaje))
    }
  
    return(
        <div className='prepost'>
        <button className='botonposteos'><Link to="/posts" >Hacer una publicación</Link></button>
        <button onClick={()=> showPost()} className="botonposteos">Mostrar Nuevas Noticias</button>
        <ul >
            {posts.map( post => <li className="list-group  posteito"key={post.id}>
                                    <h1 className='text-center'>{post.data.tittle}</h1>
                                    <p className="text-center font-weight-light">{post.data.body}</p>
                                    <p className='text-center'>
                                    <img className='rounded' src={post.data.img}></img></p>
                                    <p className='text-center'>Noticia por: {post.data.usuario}</p>
                                </li>)}
        </ul>
        </div>
    )
}
export default ShowPHome;


