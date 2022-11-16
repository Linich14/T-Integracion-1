import React, {useState} from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../components/firebase';
import { UserAuth } from '../context/AuthContext';
import './posts.css';


const Post = () =>{

    const {user} = UserAuth();
    const [usuario , setUser] = useState(user?.displayName);
    const [tittle, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [img , setImg] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(tittle === ''){
            return
        }
        const postCollectionRef = collection(db, 'post-home')
        await addDoc(postCollectionRef, {tittle, body, img}).then(response=>{
            console.log(response)
        }).catch(error =>{
            console.log(error.mensaje)
        })
        alert(tittle)
    }
    return(
        <div>
            <h1 id='titulo-noti'>Crear Noticia</h1>
            <form id="noticia-text" onSubmit={handleSubmit}>
                <label id='txt-title' htmlFor="title">Titulo</label>
                    <input
                    id='titulo'
                    type='text'
                    value={tittle}
                    onChange={ e => 
                    setTitle(e.target.value)}/>
                <label id= 'content' htmlFor="body">Contenido</label>
                    <input
                    id="cuerpo"
                    type='text'
                    value={body}
                    onChange={e =>
                    setBody(e.target.value)}/>
                <label id='img' htmlFor="images">Imagenes</label>
                    <input
                    id="arch"
                    type='imgs'
                    value={img}
                    onChange={e =>
                    setImg(e.target.value)}/>
            <button
             id="guardar"
             type='submit'
             >Subir Noticia</button>
            </form>
        </div>
    )

}
export default Post;