import React, { useState } from "react";
import "./ChatFooter.css";

import { useSelector, useDispatch } from "react-redux";

import { ActionSendChat } from "../../../store/actions/action-firebase";

import { InsertEmoticon, Mic } from "@material-ui/icons";

function ChatFooter() {
  const [inputMsg, setInputMsg] = useState("");
  const dispatch = useDispatch()

  const { uid, chat, selectedChatIndex } = useSelector((state) => ({
    uid: state.rSession.uid,
    chat: state.rFirebase.messages,
    selectedChatIndex: state.rFirebase.selectedChatIndex,
  }));

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(ActionSendChat(chat[selectedChatIndex].docKey,inputMsg,uid));
    setInputMsg("");
  };
  return (
    <div className="chat_footer">
      <InsertEmoticon />
      <form onSubmit={sendMessage}>
        <input
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          type="text"
          placeholder="Send Message. . ."
        />
      </form>
      <Mic />
    </div>
  );
}

export default ChatFooter;
