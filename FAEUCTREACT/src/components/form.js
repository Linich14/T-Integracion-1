import React, { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from './firebase'
import { UserAuth } from '../context/AuthContext';

const Post = () => {
    const { user } = UserAuth();
    const [usuario, setUser] = useState(user.displayName)
    const [title, setPostTitle] = useState("")
    const [description, setPostText] = useState("")
    const [imgurl, setPostUrl] = useState("")
    const [createdat, setTime] = useState(Timestamp.now().toDate().toString());



    const handleSubmit = async (e) => {
        if (title == "" || description == "") { alert("Titulo o Contenido Vacio") }
        else {
            await addDoc(collection(db, "Blogs"), {
                title, createdat, description, imgurl, usuario
            }).then(() => { alert('Publicado') })
                .catch(err => { alert(err.message) })
            setPostText("")
            setPostTitle("")
            setPostUrl("")
            setTime("")
            setUser("")
        }
    }

    return (
        <div>
            <h2>Ingrese su nuevo posteo</h2>
            <form onSubmit={ev => {
                ev.preventDefault();
                handleSubmit()
            }}>
                <h4>Titulo del Post</h4>
                <input onChange={(e) => [setPostTitle(e.target.value)]} type='text' placeholder="Titulo" name="title" id="title"></input>
                <h4>Contenido</h4>
                <textarea onChange={(e) => [setPostText(e.target.value)]} type='text' name="texto" id="content" cols="100" rows="5"></textarea>
                <h4>Imagen</h4>
                <input onChange={(e) => [setPostUrl(e.target.value)]} type='text' name="photo" placeholder='url de la imagen' />
                <br />
                <br />
                <button>Publicar</button>
            </form>
        </div>
    )
}

export default Post;