import React, { Component } from "react";
import { get } from "../../utilities";
import Bear from "../assets/images/avatars/Bear.png";
import bearTwo from "../assets/images/logo.gif";
import "../pages/css/Profile.css";
import "../../utilities.css";
// import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "Profile Page";
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
  }



  render() {
    console.log(this.props);
    if (!this.state.user) {
      return <div> Loading! </div>;
    }
    return (
      <>
        <div className = "pageContainer">
            <h2>Hi {this.props.userName}!</h2>
            <img src={bearTwo} id= "Profile-bear"></img>
        </div>
        </>
    );
  }
}

export default Profile;
