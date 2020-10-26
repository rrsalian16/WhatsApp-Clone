import React from "react";
import "./Sidebar.css";

import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";

import SidebarChat from "./SidebarChat";

import { ActionSelectedChatIndex } from "../../store/actions/action-firebase";
import { ActionSessionClear } from "../../store/actions/action-session";

import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  const { uid, profilePic, chat, users, selectedChatIndex } = useSelector((state) => ({
    uid: state.rSession.uid,
    profilePic: state.rSession.profilePic,
    chat: state.rFirebase.messages,
    users: state.rFirebase.users,
    selectedChatIndex: state.rFirebase.selectedChatIndex,
  }));

  const onClickChatList = (index, uid) => {
    dispatch(ActionSelectedChatIndex(index, uid));
  };

  const [anchorEl, setAnchorEl] =React.useState(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
      dispatch(ActionSessionClear());
  }

  const chatList =
    users &&
    chat &&
    chat.map((c, index) => {
      let u = c.users.find((u) => u !== uid);
      let user = users.find((usr) => usr.uid === u);
      return (
        <SidebarChat
          selected={index === selectedChatIndex ? true : false}
          clicked={() => onClickChatList(index, u)}
          key={index}
          lastMsg={ c?.messages[c?.messages.length - 1]?.msg}
          pic={user.profilePic}
          name={user.name}
        />
      );
    });

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={profilePic} />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            id="logout-menu"
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {chatList}
      </div>
    </div>
  );
}

export default Sidebar;
