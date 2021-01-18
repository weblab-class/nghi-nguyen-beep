import React, {Component} from "react";
import { get, post } from "../../utilities.js";
import { socket } from "../../client-socket.js";
import { Link, Router, Redirect, redirectTo } from "@reach/router";

const WEATHER_API_KEY = "962492a57a2e84bd0413d49ba0e0c506";

class WeatherSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {lon: null, lat: null};
    }


componentDidMount() {
    document.title = "WeatherSubmitButton";
}

getLocation

getWeather = () => {
    get("api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}");

  };

render() {
    
   
        return (
        <>
        <button type="submit" onClick= {() => this.getWeather(this.props)} value={this.props.clothing} >Submit</button>
        </>
        )
    }

}
export default WeatherSubmitButton;