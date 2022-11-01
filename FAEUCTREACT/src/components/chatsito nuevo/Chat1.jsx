import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./IngreseM";
import { ChatContext } from "../../context/ChatContext";
import './chatbonito.css'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;