import React, { Component } from "react";
import { get } from "../../utilities";
import Bear from "../assets/images/avatars/Bear.png";
import bearTwo from "../assets/images/logo.gif";
import "../pages/css/Profile.css";
import "../../utilities.css";
import WeatherSubmitButton from "../modules/WeatherSubmitButton.js";
// import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {geolocationAllowed: null, temp: null, city: null};
  }

  componentDidMount() {
    document.title = "Profile Page";
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
    ("geolocation" in navigator) ? this.setState({geolocationAllowed : true}) : this.setState({geolocationAllowed : false});
  }

  getTemp = (obj) => {
    console.log(obj);
    this.setState({temp: obj.temp, city: obj.city}, console.log("getTemp", this.state));
  }

  render() {
    console.log("profile", this.props);
    if (this.state.city) { 
      return (
        <>
          <div className = "pageContainer">
              {/* <h2>Hi {this.props.userName}!</h2> */}
              {/* <h2>Click the button below to get your outfit today!</h2> */}
              <h2>In {this.state.city}, it is currently {this.state.temp}°F</h2>
              <img src={bearTwo} id= "Profile-bear"></img>
              <WeatherSubmitButton onChange = {this.getTemp}/>
          </div>
          </>
      );
    }
    return (
      <>
        <div className = "pageContainer">
            <h2>Hi {this.props.userName}!</h2>
            <h2>Click the button below to get your outfit today!</h2>
            <img src={bearTwo} id= "Profile-bear"></img>
            <WeatherSubmitButton onChange = {this.getTemp}/>
        </div>
        </>
    );
  }
}

export default Profile;
