import React from 'react'
import { storage } from "../components/firebase";
import { useState } from 'react';
import './posts.css';

function Posts() {
    const[file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const result = await storage(file);
            console.log(result);
        } catch (error){
            console.error(error);
            alert('Fallo al subir, intente nuevamente')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload">
            <input type="file" name="" id='select' onChange={(e) => setFile(e.target.files[0])}/>
            <button className='btn btn-primary' id='subir'>Subir Archivo</button>
        </form>
    );
}

export default Posts
