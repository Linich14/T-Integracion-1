import React, {useState} from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../components/firebase';
import './posts.css';


const Post = () =>{

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(title === ''){
            return
        }
        const postCollectionRef = collection(db, 'post-home')
        addDoc(postCollectionRef, {title, body}).then(response=>{
            console.log(response)
        }).catch(error =>{
            console.log(error.mensaje)
        }) 
        alert(title)
    }

    return(
        <div>
            <h1 id='titulo-noti'>Crear Noticia</h1>

            <form id="noticia-text"  onSubmit={handleSubmit}>
                <label id='txt-title' htmlFor="title">Titulo</label>
                    <input
                    id='titulo'
                    type='text'
                    value={title}
                    onChange={ e => 
                    setTitle(e.target.value)}/>
                <label id= 'content' htmlFor="body">Contenido</label>
                    <input
                    id="cuerpo"
                    type='text'
                    value={body}
                    onChange={e =>
                    setBody(e.target.value)}/>
            <button
             id="guardar"
             type='submit'
             >Subir Noticia</button>
            
            </form>
            


        </div>
    )

}
export default Post;