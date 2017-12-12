import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import mogo from "./maroon-logo.svg";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.goLogin = this.goLogin.bind(this);
    this.addUsername = this.addUsername.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.goRegister = this.goRegister.bind(this);
  }

  goLogin() {
    axios
      .post("/api/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
  }
  goRegister() {
    console.log(this.state);
  }
  addUsername(e) {
    console.log(e);
    this.setState({ username: e.target.value });
  }
  addPassword(e) {
    console.log(e);
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="loginMain">
        <img src={mogo} className="thisSize" />

        <h1 className="imagePlaceholder">Book Exchange</h1>
        <div className="loginBox">
          <div className="loginInput">
            <h2>Username</h2>
            <input
              className="loginUserInput"
              type="text"
              onChange={this.addUsername}
            />
          </div>
          <div className="loginInput">
            <h2>Password</h2>

            <input
              className="loginUserInput"
              type="password"
              onChange={this.addPassword}
            />
          </div>
          <div className="buttonOrganizer">
            <button onClick={this.goRegister}>Register</button>
            <button onClick={this.goLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Login);
