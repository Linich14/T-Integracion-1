import React, {useState, useEffect, useRef} from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Sidebar from './Sidebar'
import {db} from "./firebase";
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'
import './chat.css';


const Chat = () => {
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

                <main className=" " id="C-3">
                    
                    {messages && messages.map((message) =>(
                        <Message key={message.id} message={message}  />
                    ))}

                    <hr className="mb-2"/>
                    <SendMessage scroll={scroll} />

                </main>
                <span ref={scroll}></span>

        </div>

    )
}
export default Chat;