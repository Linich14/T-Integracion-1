import React from "react";
import Chat from '../components/chatsito nuevo/Chat1';
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