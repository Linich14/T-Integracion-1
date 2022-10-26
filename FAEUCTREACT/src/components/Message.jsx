import React from "react";
import { auth } from "./firebase";
import './chat.css'

import Photo from '../pages/fotosperfil'

const style = {
    sent: 'bg-warning rounded  text-end float-right',
    received:'bg-info rounded float-left '
}

const Message = ({ message }) => {

  const messageClass = 
  message.uid === auth.currentUser.uid 
  ? `${style.sent}` 
  : `${style.received}` 

  return (  
        <div className={`${messageClass}`} id="">
            <Photo url={message.photo}></Photo>
            <p className="" id='c-9'>{message.name}</p>
            <p id="mensajito">{message.text}</p>
        </div>

    )  
}

export default Message;