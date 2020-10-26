import React from "react";

import Popup from "reactjs-popup";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

import { ActionSearchUser, ActionCreateNewChat } from "../../store/actions/action-firebase";

function SidebarChat({ selected, addNewChat, name, pic, lastMsg, clicked }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [searchName, setsearchName] = React.useState("");

  const dispatch = useDispatch();

  const { searchedUser, uid, users } = useSelector((state) => ({
    searchedUser: state.rFirebase.searchedUser,
    uid: state.rSession.uid,
    users: state.rFirebase.users,
  }));

  const searchUser = (name) => {
    setsearchName(name);
    if (searchName) {
      dispatch(ActionSearchUser(name));
    }
  };

  var userUid = [];
  userUid = users?.map((u) => u.uid);

  const searchedUserList =
    searchName &&
    searchedUser &&
    searchedUser
      .filter((u) => u.uid !== uid && !userUid.includes(u.uid))
      .map((u) => (
        <li
          className="searchedUser"
          key={u.uid}
          onClick={() => {
            dispatch(ActionCreateNewChat(uid, u.uid));
            setOpenModal(false);
          }}
        >
          <Avatar src={u.profilePic}></Avatar>
          <span>{u.name}</span>
        </li>
      ));

  return !addNewChat ? (
    <div
      onClick={clicked}
      style={{ backgroundColor: selected ? "#ccc" : "" }}
      className="sidebarchat_chat"
    >
      <Avatar src={pic} />
      <div className="sidebarchat_info">
        <h2>{name}</h2>
        <p>{lastMsg}</p>
      </div>
    </div>
  ) : (
    <div>
      <div onClick={() => setOpenModal(true)} className="sidebarchat newchat">
        <div className="sidebarchat_info">
          <h2>Add New Chat</h2>
        </div>
      </div>
      <Popup
        modal
        open={openModal}
        closeOnDocumentClick
        className="confirmModal"
        onClose={() => setOpenModal(false)}
      >
        <div>
          <input
            value={searchName}
            onChange={(e) => searchUser(e.target.value)}
            className="searchModalInput"
            type="text"
            placeholder="search new user"
          />
          <ul className="searchedUsersList">{searchedUserList}</ul>
        </div>
      </Popup>
    </div>
  );
}

export default SidebarChat;
