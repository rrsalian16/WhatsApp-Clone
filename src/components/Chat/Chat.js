import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Chat.css";


import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

function Chat() {

    const dispatch = useDispatch();
     const {uid, chat,users,selectedChatIndex,selectedChatUid } = useSelector(
        (state) => ({
            uid:state.rSession.uid,
            chat:state.rFirebase.messages,
            users:state.rFirebase.users,
            selectedChatIndex: state.rFirebase.selectedChatIndex,
            selectedChatUid: state.rFirebase.selectedChatUid
        })
    );

    const selectedUser = selectedChatUid && users && users.find(u => u.uid === selectedChatUid);

    return (
      <div className="chat">
        {selectedChatIndex !== null && selectedChatIndex !== undefined ? (
          <>
            <ChatHeader pic={selectedUser?.profilePic} name={selectedUser?.name} />
            <ChatBody
              message={chat && selectedChatIndex !== undefined && chat[selectedChatIndex]}
            />
            <ChatFooter />
          </>
        ) : (
          <div className="intro">
            <img
              className="intro_img"
              src={require("../../assets/images/intro-img.png")}
              alt="intro_img"
            />
            <p>
              To Chat with Admin click Add New Chat & Search "Admin".
            </p>
          </div>
        )}
      </div>
    );
}

export default Chat;
