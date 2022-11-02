import React from 'react'
import {uploadPost } from "../components/firebase";
import { useState } from 'react';
import {saveAs} from 'file-saver';
import {v4} from 'uuid';
import './posts.css';

function Posts() {

    const [file, setFile] = useState()

    const handleSubmit = async (e) => { {/* funcion para cargar el archivo con el boton*/}
        e.preventDefault();
        try{
            const result = await uploadPost(file);
            console.log(result)
            alert('Se ha subido correctamente el archivo!')
        }
        catch(error)
        {
            console.error(error)
            alert('Fallo al subir el archivo, intente nuevamente.')
        }
    };

    const [myValue, setMyValue] = useState('')


    const createText = () => {

        const blob = new Blob([myValue], {type: 'text/plain;charset=utf-8'});

        saveAs(blob, (v4()+'txt'));
    }

    

    return(
        <div>
            
            <h1 id='titulo-noti'>Nueva Noticia</h1>
            <button id='guardar-txt' onClick={createText}> GuardarTexto </button>
            <textarea 
            
            id="noticia-text"
            cols = "30"
            rows= "10"
            placeholder='Escriba algo...'
            value={myValue}
            onChange={(e) => setMyValue(e.target.value)}
            
            ></textarea>


            <form onSubmit={handleSubmit} className="upload"> {/* Boton cargar post*/}
                <input type="file" name="" id='select' onChange={e => setFile(e.target.files[0])}/>
                <button className='btn btn-primary' id='subir'>Subir Archivo</button>
            </form>

        </div>
    );
}

export default Posts;
