import React from "react";
import "firebase/firestore";
import { db } from './firebase'

const Mensaje = (msj) =>{

    db.collection("mensajes").add({
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