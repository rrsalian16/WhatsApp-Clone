import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Login.css";

import { ActionSessionStart } from "../store/actions/action-session";
import { Button } from "@material-ui/core";

export class Login extends Component {
  render() {
    const signIn = () => {
      this.props.ActionSessionStart();
    };
    return (
      <div className="login_container">
        <div className="login_box">
          <img src={require("../assets/images/WhatsApp.svg")} alt="" />
          <div className="login_tex">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button onClick={signIn}>Sign In With Google</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rSession }) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ActionSessionStart,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
