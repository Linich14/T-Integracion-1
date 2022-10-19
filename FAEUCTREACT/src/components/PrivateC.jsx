import React from "react";
import Chat from './Chat';
import Sidebar from './Sidebar';

import { AuthContextProvider } from '../context/AuthContext';
import { ChatContextProvider } from '../context/ChatContext';


const PrivateC = () => {
    return(
        <div className="home">
            <div className="container">
            <AuthContextProvider>
                <ChatContextProvider>
                        <Sidebar/>
                        <Chat/>
                </ChatContextProvider>
            </AuthContextProvider>
            </div>
        </div>
    )
}
export default PrivateC;