import React, {useState, useEffect, useRef} from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import {db, profesores} from "./firebase";
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'
import './chat.css';
import { UserAuth } from '../context/AuthContext';


const Chat = () => {
    const { user } = UserAuth();
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(()=>{
        const q = query(collection(db, 'messages'),    orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id });
            })
            setMessages(messages);
        })
        return () => unsubscribe();
    }, []);

return (
    
        <div className='container ' id="C-1">
        {profesores.includes(user?.uid) ?  (<div>Lo sentimos, los profesores no pueden acceder a la herramienta de Chat publico</div> ) : ( 

            <div className='row' >
            <main className=" col py-4" id="C-3">
                
                {messages && messages.map((message) =>(
                    <Message key={message.id} message={message}  />
                ))}

            </main>
            <hr className=""/>
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
            </div>

        )}

        </div>

    )
}
export default Chat;