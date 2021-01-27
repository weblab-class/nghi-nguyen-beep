import React, { Component } from "react";
import { get, post } from "../../utilities";
import bearTwo from "../assets/images/clothing.gif";
import sadBear from "../assets/images/sadBear.png";
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
import Mittens from "../modules/clothing/Mittens.js";
import Hat from "../modules/clothing/Hat.js";
import Crewneck from "../modules/clothing/Crewneck.js";
import Sweater from "../modules/clothing/Sweater.js";
import Sweatpants from "../modules/clothing/Sweatpants.js";
import TankTop from "../modules/clothing/TankTop.js";
import Cardigan from "../modules/clothing/Cardigan.js";
import GeneralItem from "../modules/clothing/GeneralItem.js";
import Avatar from "../modules/Avatar.js";
import OutfitExplain from "./OutfitExplain.js";
import { navigate } from "@reach/router";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      geolocationAllowed: null, 
      temp: null, 
      city: null,
      avatar: "",
      closet: {
          tops: "",
          bottoms: "",
          shoes: "",
          outerwear: "",
          accessories: ""
      },
      loading: null,
    };
  }
  

  componentDidMount() {
    get("/api/accessDenied", {userId: this.props.userId})
    .then((res) => {
      if (res.msg === "denied") {
        navigate("/");
      }
    }).then(
      post("/api/changeUserStatus", {userId: this.props.userId})
      ).catch( (err) => console.log(err));

    (navigator.geolocation) ? this.setState({geolocationAllowed : true}) : this.setState({geolocationAllowed : false});
  }

  getTemp = (obj) => {
    console.log(obj);
    if (obj.geolocationAllowed) {
      this.setState({temp: obj.temp, city: obj.city, loading: false, geolocationAllowed: true}, () => {
        get('/api/outfit', {"temp": this.state.temp}).then((api) => {this.setState({
          closet: {
            tops: api.tops,
            bottoms: api.bottoms, 
            shoes: api.shoes,
            outerwear: api.outerwear,
            accessories: api.accessories }
          }, () => console.log(this.state))})
        });
    }
    else{
      this.setState({geolocationAllowed: false});
    }
  }

 
  render() {
    if (this.state.geolocationAllowed){
      if (this.state.city) { 
        return (
          <>
          <OutfitExplain/>
            <div className = "Profile-main">
                <h2>In {this.state.city}, it is currently {this.state.temp}°F</h2>
                <h2>Based on your closet, we suggest wearing the following:</h2>
  
                 <p>{this.state.closet.tops}   {this.state.closet.bottoms}   {this.state.closet.shoes}   {this.state.closet.outerwear}   {this.state.closet.accessories}</p>
              
                <div className = "Outfit">
                  <Avatar avatar= {this.state.avatar} id= "Profile-bear"/>

                  <GeneralItem temp = {this.state.temp}/>

                  <Umbrella itemInCloset = {this.state.closet.accessories} />
                  <Sunglasses itemInCloset = {this.state.closet.accessories} />
                  <Mittens itemInCloset = {this.state.closet.accessories} />
                  <Hat itemInCloset = {this.state.closet.accessories} />

                  <Jeans itemInCloset = {this.state.closet.bottoms} />
                  <Sweatpants itemInCloset = {this.state.closet.bottoms} />
                  <Shorts itemInCloset = {this.state.closet.bottoms} />

                  <Sneakers itemInCloset = {this.state.closet.shoes} />
                  <RainBoots itemInCloset = {this.state.closet.shoes} />

                  <Shirt itemInCloset = {this.state.closet.tops === "Shirt"} />
                  <TankTop itemInCloset = {this.state.closet.tops} />
                  <LongSleeve itemInCloset = {this.state.closet.tops} />
                  
                  <Sweater itemInCloset = {this.state.closet.outerwear}/>
                  <Cardigan itemInCloset = {this.state.closet.outerwear} />
                  <Crewneck itemInCloset = {this.state.closet.outerwear} />
                  <RainJacket itemInCloset = {this.state.closet.outerwear} />
                  <Parka itemInCloset = {this.state.closet.outerwear}/>
                </div>
                <WeatherSubmitButton onChange = {this.getTemp} userId = {this.props.userId} geolocationAllowed = {this.state.geolocationAllowed}/>
            </div>
          </>
        );
      }

      else { 
        return (
            <>
            <OutfitExplain/>
            <div className = "Profile-main">
                <h2>Hi {this.props.userName}!</h2>
                <h2>Click the button below to get your outfit today! </h2>
                <p> (please allow some loading bts after pressing button) </p>
                <div className = "Outfit">                  
                <Avatar avatar= {this.state.avatar} />
                  <img src={bearTwo} id= "Profile-bear"></img>
                </div>
                <WeatherSubmitButton onChange = {this.getTemp} userId = {this.props.userId} geolocationAllowed = {this.state.geolocationAllowed}/>
            </div>
            </>
          );
      };
    }

    else {
      return(
        <>
        <OutfitExplain/>
          <div className = "Profile-main">
              <h2>Hmm. I can't seem to access your location</h2>
              <p>Allow location access to get your outfit, then refresh site!</p>
              <div className = "Outfit">
                <img src={sadBear} id= "Profile-bear"></img>
              </div>
              <WeatherSubmitButton onChange = {this.getTemp} userId = {this.props.userId} geolocationAllowed = {this.state.geolocationAllowed}/>
          </div>
          </>
      );
    }

  }
}

export default Profile;
