import React, {useState} from "react";
import {auth, db} from './firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import './chat.css'



const SendMessage = ({scroll}) => {
    const[input, setInput] = useState('');
    const sendMenssage = async (e) => {
        e.preventDefault()
        if (input === ''){
            alert('Porfavor ingresa un mensaje')
            return
        }
        const {uid, displayName, photoURL} = auth.currentUser
        await addDoc(collection(db, 'messages'),{
            text: input, 
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
            photo: photoURL
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="" id="formitacompleta">
        <form onSubmit={sendMenssage} className="d-flex" id="formita">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex py-4"
            type="text"
            id="inputmensaje"
            placeholder="Escriba su mensaje"
             />
             <button className="flex btn btn-primary " type="submit" id="botonmensaje" >Enviar Mensaje</button>
        </form>
        
        </div>
    )
}

export default SendMessage