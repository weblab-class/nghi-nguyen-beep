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
import MainUser from "./pages/MainUser.js";
import { socket } from "../client-socket.js";
import "./pages/App.css";
import { get, post } from "../utilities";
// import { navigate } from "gatsby";

/**
 * Define the "App" component as a class.
 */
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
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id, newUser: false, userName: user.name });
      }

      else {
        this.setState({ newUser: true });
      }
    
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;

    if (this.state.newUser) {
      post("/api/login", { token: userToken }).then((user) => {
        this.setState({ isLoggedOut:false, userId: user._id, userName: user.name}, () => navigate("/avatar"));
        post("/api/initsocket", { socketid: socket.id });

      });
    }

    else {
      post("/api/login", { token: userToken }).then((user) => {
        this.setState({ userId: user._id, userName: user.name, newUser: false});
        post("/api/initsocket", { socketid: socket.id });

      });
    }

    // post("/api/login", { token: userToken }).then((user) => {
    //   this.setState({ userId: user._id, userName: user.name});
    //   post("/api/initsocket", { socketid: socket.id });

    // });
  };

  handleLogout = () => {
    this.setState({ userId: null, userName: null, isLoggedOut: true, newUser: false});
    post("/api/logout").then(() => navigate("/"));
  };

  render() {
    console.log("app", this.state);
    if (this.state.newUser) {
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
            <General path="/" userName= {this.state.userName} userId = {this.state.userId}/>
            <About path="/about"/>
            <Profile path="/profile/:userId" userName= {this.state.userName} userId = {this.state.userId}/>
            <SignedOut path="/goodbye" />
            <ChooseAvatar path="/avatar" newUser = {this.state.newUser} userId = {this.state.userId}/>
            <Survey path="/survey" newUser = {this.state.newUser} userId = {this.state.userId}/>
            <MainUser path="/main" newUser = {this.state.newUser} userId = {this.state.userId} userName= {this.state.userName}/>
            <NotFound default />
          </Router>
          </div>
        </>
      );
    }

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
          <General path="/" userName= {this.state.userName}/>
          <About path="/about"/>
          <Profile path="/profile/:userId" userName= {this.state.userName}/>
          <SignedOut path="/goodbye" />
          <ChooseAvatar path="/avatar" newUser = {this.state.newUser} userId = {this.state.userId}/>
          <Survey path="/survey" newUser = {this.state.newUser} userId = {this.state.userId}/>
          <MainUser path="/main" newUser = {this.state.newUser} userId = {this.state.userId} userName= {this.state.userName}/>
          <NotFound default />
        </Router>
        </div>
      </>
    );
  }
}

export default App;
