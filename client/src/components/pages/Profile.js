import React, { Component } from "react";
import { get } from "../../utilities";
import Bear from "../assets/images/avatars/bearmod.png";
import bearTwo from "../assets/images/logo.gif";
import "../pages/css/Profile.css";
import "../../utilities.css";
import WeatherSubmitButton from "../modules/WeatherSubmitButton.js";
import Shirt from "../modules/clothing/Shirt.js";
import LongSleeve from "../modules/clothing/LongSleeve.js";
import Jeans from "../modules/clothing/Jeans.js";
import Shorts from "../modules/clothing/Shorts.js";
import Sneakers from "../modules/clothing/Sneakers.js";
import RainBoots from "../modules/clothing/RainBoots.js";
import Parka from "../modules/clothing/Parka.js";
import RainJacket from "../modules/clothing/RainJacket.js";
import Umbrella from "../modules/clothing/Umbrella.js";
import Sunglasses from "../modules/clothing/Sunglasses.js";
import GeneralItem from "../modules/clothing/GeneralItem.js";
// import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      geolocationAllowed: null, 
      temp: null, 
      city: null,
      closet: {
          tops: [],
          bottoms: [],
          shoes: [],
          outerwear: [],
          accessories: []
      },
      loading: null,
    };
  }
  componentDidMount() {
    document.title = "Profile Page";
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState(
      { user: user,
        closet: {
          tops: user.closet.tops,
          bottoms: user.closet.bottoms,
          shoes: user.closet.shoes,
          outerwear: user.closet.outerwear,
          accessories: user.closet.accessories,
        }
      }));
    ("geolocation" in navigator) ? this.setState({geolocationAllowed : true}) : this.setState({geolocationAllowed : false});
  }

  getTemp = (obj) => {
    console.log(obj);
    this.setState({temp: obj.temp, city: obj.city, loading: false}, console.log("getTemp", this.state));
  }

  getOutfit = () => {}

  render() {
    console.log("profile", this.props, this.state);
    if (this.state.city) { 
      return (
        <>
          <div className = "Profile-main">
              <h2>In {this.state.city}, it is currently {this.state.temp}°F</h2>
              <h2>Based on your closet, we suggest wearing the following:</h2>
              <div className = "Outfit">
                <img src={Bear} id= "Profile-bear"/>
                <GeneralItem temp = {this.state.temp}/>
                <Umbrella temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />
                <Sunglasses temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />
                <Jeans temp = {this.state.temp} itemInCloset = {this.state.closet.bottoms} />
                <Shorts temp = {this.state.temp} itemInCloset = {this.state.closet.bottoms} />
                <Sneakers temp = {this.state.temp} itemInCloset = {this.state.closet.shoes} />
                <RainBoots temp = {this.state.temp} itemInCloset = {this.state.closet.shoes} />
                <Shirt temp = {this.state.temp} itemInCloset = {this.state.closet.tops} />
                <LongSleeve temp = {this.state.temp} itemInCloset = {this.state.closet.tops} />
                <RainJacket temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear} />
                <Parka temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear}/>
                
              </div>
              <WeatherSubmitButton onChange = {this.getTemp}/>
          </div>
          </>
      );
    }
    return (
      <>
        <div className = "Profile-main">
            <h2>Hi {this.props.userName}!</h2>
            <h2>Click the button below to get your outfit today! </h2>
            <p> (please allow some loading bts after pressing button) </p>
            <div className = "Outfit">
              <img src={bearTwo} id= "Profile-bear"></img>
            </div>
            <WeatherSubmitButton onChange = {this.getTemp}/>
        </div>
        </>
    );
  }
}

export default Profile;
