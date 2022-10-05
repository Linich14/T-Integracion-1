import React from "react";
import { auth } from "./firebase";
import './chat.css'

const style = {
    message: 'text-justify',
    name: 'absolute mt-[-4rem]',
    sent: 'bg-warning rounded flex-row-reverse text-end float-right',
    received:'bg-info rounded float-left '
}

const Message = ({ message }) => {
  
  const messageClass = 
  message.uid === auth.currentUser.uid 
  ? `${style.sent}` 
  : `${style.received}` 

  return (  
        <div className={`${messageClass}`} id="cc-1">
            <img src={message.photo} alt="?" />
            <p className="" id='c-9'>{message.name}</p>
            <p id="mensajito">{message.text}</p>
        </div>

    )  
}

export default Message