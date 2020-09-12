import React, { useState } from "react";

import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    MoreVert,
    SearchOutlined,
    InsertEmoticon,
    Mic,
} from "@material-ui/icons";

function Chat() {
    const [inputMsg, setInputMsg] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(inputMsg);
        setInputMsg("");
    };
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_header_info">
                    <h3>Room Name</h3>
                    <p>Last Seen at..</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Rakshith R S</span>
          Hey Guys
          <span className="chat_time">3:30pm</span>
                </p>
                <p className="chat_message chat_receiver">
                    <span className="chat_name">Rohith S</span>
          Hello Guys
          <span className="chat_time">3:35pm</span>
                </p>
            </div>
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
        </div>
    );
}

export default Chat;
