import React, {Component} from "react";
import { get, post } from "../../utilities.js";
import { socket } from "../../client-socket.js";
import { Link, Router, Redirect, redirectTo } from "@reach/router";

const WEATHER_API_KEY = "962492a57a2e84bd0413d49ba0e0c506";

class WeatherSubmitButton extends Component {
    constructor(props) {
        super(props);
        this.getCoordinates = this.getCoordinates.bind();
        this.getWeather = this.getWeather.bind();
        this.state = {
            longitude: null, 
            latitude: null,
            city: null,
            tempF: null,

        };
    }

componentDidMount() {
    document.title = "WeatherSubmitButton";   
}

getCoordinates  = async () => {
    await navigator.geolocation.getCurrentPosition(
        position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
        }, () => this.getWeather()), 
        err => console.log(err)
    );

    // navigator.geolocation.getCurrentPosition( ( function(position) {
    // console.log(position.coords.longitude, position.coords.latitude);
    // this.setState({longitude: position.coords.longitude, latitude: position.coords.latitude}, console.log("after setting state", this.state));
    // })); 
    
}


getWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+String(this.state.latitude)+"&lon="+String(this.state.longitude)+"&appid="+WEATHER_API_KEY+"&units=imperial")
    .then(response => response.json())
    .then(data => this.setState({
        city: data.name,
        temp: data.main.temp
    }, () => 
    {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    }));
  }


render() {
    if (this.state.city) {
        return (
            <>
            {/* <h2>In {this.state.city}, it is currently {this.state.tempF}°F </h2> */}
            <button type="submit" onClick= {() => this.getCoordinates()} value={this.props.clothing} >Submit</button>
            </>
            )
    }
   
        return (
        <>
        <button type="submit" onClick= {() => this.getCoordinates()} value={this.props.clothing}>Submit</button>
        </>
        )
    }

}
export default WeatherSubmitButton;