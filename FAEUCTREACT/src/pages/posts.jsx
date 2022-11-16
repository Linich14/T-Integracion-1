import React, {useState} from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../components/firebase';
import { UserAuth } from '../context/AuthContext';
import './posts.css';


const Post = () =>{

    const {user} = UserAuth();
    const [usuario , setUser] = useState("");
    const [tittle, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [img , setImg] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(tittle === ''){
            return
        }

        const postCollectionRef = collection(db, 'post-home')
        
        await addDoc(postCollectionRef, {tittle, body, img, usuario}).then(response=>{
            console.log(response)
        }).catch(error =>{
            console.log(error.mensaje)
        })
        alert("Subido Exitosamente")
    }
    return(
        <div className="">
            <br /><br />
            <br /> <br />
               <form id="noticia-text" onSubmit={handleSubmit}>
                <h1 id='titulo-noti'>Crear Noticia</h1>
               <br />
                <label id='txt-title' htmlFor="title">Titulo</label>
                    <input
                    id='titulo'
                    type='text'
                    style={{width: "500px"}}
                    value={tittle}
                    onChange={ e => 
                    setTitle(e.target.value)}/>
                <hr />
                <label id='img' htmlFor="images">Imagenes</label>
                    <input
                    id="arch"
                    type='imgs'
                    value={img}
                    style={{width: "500px"}}
                    onChange={e =>
                    setImg(e.target.value)}/>
                    <hr />
                <label id= 'content' htmlFor="body">Contenido</label>
                    <textarea
                    id="cuerpo"
                    type='text'
                    className="inputcito"
                    value={body}
                    onChange={e =>
                    setBody(e.target.value)}/>

            <button
             id="guardar"
             type='submit'
             onClick={e => setUser(user.displayName)}
             
             className="py-1 mb-3 btn btn-primary"
             >Subir Noticia</button>
            </form>
        </div>
    )

}
export default Post;