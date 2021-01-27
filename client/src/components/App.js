import React, { Component, useEffect } from "react";
import { Router, Redirect, redirectTo, navigate } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import General from "./pages/General.js";
import About from "./pages/About.js";
import NavBar from "../components/modules/NavBar.js";
import "../utilities.css";
import Profile from "./pages/Profile.js";
import SignedOut from "./pages/SignedOut";
import Survey from "./pages/Survey.js";
import ChooseAvatar from "./pages/ChooseAvatar";
import { socket } from "../client-socket.js";
import "./pages/App.css";
import { get, post } from "../utilities";

class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      isLoggedOut: null,
      userName: null,
      newUser: null,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        this.setState({ userId: user._id, userName: user.name, newUser: user.newuser});
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
      post("/api/login", { token: userToken }).then((user) => {
        this.setState({ isLoggedOut: false, userId: user._id, userName: user.name, newUser: user.newuser});
        post("/api/initsocket", { socketid: socket.id });
      });
  };

  handleLogout = () => {
    this.setState({ userId: null, userName: null, isLoggedOut: true, newUser: null});
    post("/api/logout").then(() => navigate("/"));
  };

  render() {
      return (
        <>
        <div className="mainPage" >
        <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
          userName={this.state.userName}
        />
          <Router>
            <General path="/" isLoggedOut= {this.state.isLoggedOut} newUser = {this.state.newUser} userName= {this.state.userName} userId = {this.state.userId}/>
            <About path="/about"/>
            <Profile path="/profile/:userId" isLoggedOut= {this.state.isLoggedOut} newUser = {this.state.newUser} userName= {this.state.userName} userId = {this.state.userId}/>
            <SignedOut path="/goodbye" />
            <ChooseAvatar path="/avatar" isLoggedOut= {this.state.isLoggedOut} newUser = {this.state.newUser} userId = {this.state.userId}/>
            <Survey path="/survey" isLoggedOut= {this.state.isLoggedOut} newUser = {this.state.newUser} userId = {this.state.userId}/>
            <NotFound default />
          </Router>
          </div>
        </>
      );
    
  }
}

export default App;
