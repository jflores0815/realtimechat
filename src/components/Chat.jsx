import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        
      <img src={data.user?.photoURL} alt="" style={{height: 40,width: 40}}/>
        <span style={{height: 50, position: "fixed", marginLeft: 40}}> &nbsp; &nbsp;{data.user?.displayName}
        </span>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
