import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ActionSessionClear } from "../store/actions/action-session";
import { ActionRouteNavigate } from "../store/actions/action-route";

import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

import "./App.css";

export class App extends Component {
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
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ActionSessionClear,
      ActionRouteNavigate,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
