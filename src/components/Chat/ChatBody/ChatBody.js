import React from "react";
import { useSelector } from "react-redux";

import "./ChatBody.css";

function ChatBody({ message }) {

    const { uid,name, chat, users, selectedChatIndex, selectedChatUid } = useSelector((state) => ({
      uid: state.rSession.uid,
      name:state.rSession.name,
      chat: state.rFirebase.messages,
      users: state.rFirebase.users,
      selectedChatIndex: state.rFirebase.selectedChatIndex,
      selectedChatUid: state.rFirebase.selectedChatUid,
    }));

    React.useEffect(() => {
      var box = document.getElementById("box");
      box.scrollTop = box.scrollHeight;
    }, [chat]);

    const getName=(uid)=>{
        return users.find(u=>u.uid===uid)["name"]
    }

    var messageDate = "";
    var dateDisplay = false;

  const messageList = message && message.messages&&
    message.messages.map((m) => {
        dateDisplay = new Date(m.time).toLocaleDateString() !== messageDate ? true : false;
        messageDate = new Date(m.time).toLocaleDateString();
      return (
        <div key={m.time}>
          {dateDisplay ? (
            <p className="date-wise">
              {new Date(m.time).toLocaleDateString([], {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          ) : null}
          <p key={m.time} className={uid === m.sender ? "chat_message chat_sender" : "chat_message"}>
            <span className="chat_name ">{uid === m.sender ? name : getName(m.sender)}</span>
            {m.msg}
            <span className="chat_time">
              {new Date(m.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {uid === m.sender?<img className="tick_image" src={require("../../../assets/images/double-tick.svg")} alt=""/>:null}
          </p>
        </div>
      );
    });

  return (
    <div id="box" className="chat_body">
      {messageList}
    </div>
  );
}

export default ChatBody;
