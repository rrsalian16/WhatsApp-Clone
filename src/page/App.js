import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ActionSessionClear } from "../store/actions/action-session";
import { ActionRouteNavigate } from "../store/actions/action-route";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import { ActionGetChats } from "../store/actions/action-firebase";

import "./App.css";

export class App extends Component {
  componentDidMount() {
    this.props.ActionGetChats(this.props.uid);
  }

  render() {
    return (
      <div className="app">
        <div className="app_body">
          <Sidebar></Sidebar>
          <Chat></Chat>
        </div>
      </div>
    );
  }
  logout = () => {
    this.props.ActionSessionClear();
  };
}

function mapStateToProps({ rSession }) {
  return { uid: rSession.uid };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ActionSessionClear,
      ActionRouteNavigate,
      ActionGetChats,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
