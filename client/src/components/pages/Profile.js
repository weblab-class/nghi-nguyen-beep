import React, { Component } from "react";
import { get } from "../../utilities";
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
    // get('/api/outfit').then((api) => {console.log("api", api)});
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
            <div className = "Profile-main">
                <h2>In {this.state.city}, it is currently {this.state.temp}°F</h2>
                <h2>Based on your closet, we suggest wearing the following:</h2>
                <div className = "Outfit">
                  <Avatar avatar= {this.state.avatar} id= "Profile-bear"/>
                  {/* <img src={Bear} id= "Profile-bear"/> */}
                  <GeneralItem temp = {this.state.temp}/>
                  {/* <Umbrella temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />
                  <Sunglasses temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />
                  <Mittens temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />
                  <Hat temp = {this.state.temp} itemInCloset = {this.state.closet.accessories} />

                  <Jeans temp = {this.state.temp} itemInCloset = {this.state.closet.bottoms} />
                  <Sweatpants temp = {this.state.temp} itemInCloset = {this.state.closet.bottoms} />
                  <Shorts temp = {this.state.temp} itemInCloset = {this.state.closet.bottoms} />

                  <Sneakers temp = {this.state.temp} itemInCloset = {this.state.closet.shoes} />
                  <RainBoots temp = {this.state.temp} itemInCloset = {this.state.closet.shoes} />

                  <Shirt temp = {this.state.temp} itemInCloset = {this.state.closet.tops} />
                  <TankTop temp = {this.state.temp} itemInCloset = {this.state.closet.tops} />
                  <LongSleeve temp = {this.state.temp} itemInCloset = {this.state.closet.tops} />
                  
                  <Cardigan temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear} />
                  <Crewneck temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear} />
                  <RainJacket temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear} />
                  <Parka temp = {this.state.temp} itemInCloset = {this.state.closet.outerwear}/> */}
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
