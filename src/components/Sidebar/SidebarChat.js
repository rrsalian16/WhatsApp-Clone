import React from "react";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const createChat = () => {};

  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarchat_info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchat newchat">
      <div className="sidebarchat_info">
        <h2>Add New Chat</h2>
      </div>
    </div>
  );
}

export default SidebarChat;
