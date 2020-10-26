import React from 'react'
import './ChatHeader.css';

import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";


function ChatHeader({pic,name}) {
    return (
        <div className="chat_header">
            <Avatar src={pic} />
            <div className="chat_header_info">
                <h3>{name}</h3>
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
    )
}

export default ChatHeader
