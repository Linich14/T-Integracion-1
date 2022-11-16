import React from "react";

import { db } from './firebase'
import { addDoc, collection } from "firebase/firestore";


const Mensaje = (msj) =>{

    addDoc(collection(db, "mensajes"),{
        msj
    })
    .then(function(docRef){
        console.log("Enviado", docRef.id);
        alert("Su mensaje ha sido enviado correctamente")
    })
    .catch(function(error){
        console.error("Error", error);
        alert("Hubo un error al enviar el mensaje, intente nuevamente")
    });

}

document.getElementById('enviar').addEventListener('click',(e) =>{
    
    e.preventDefault();
    
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    const contacto = {
        correo, mensaje
    }

    Mensaje(contacto);
    
});