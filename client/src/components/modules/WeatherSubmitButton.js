import React, {Component} from "react";
import { get, post } from "../../utilities.js";
import { socket } from "../../client-socket.js";
import { Link, Router, Redirect, redirectTo } from "@reach/router";
import OutfitGenerator from "./OutfitGenerator.js";
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
            geolocationAllowed: null,

        };
    }

componentDidMount() {
    document.title = "weatherly";   
}

getCoordinates  = async () => {
    await navigator.geolocation.getCurrentPosition(
        position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
        geolocationAllowed: true,
        }, () => this.getWeather()), 
        err => this.setState({
            geolocationAllowed: false
        }, () => 
        {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
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
    }))
    // .then(get("api/outfit", {"temp": this.state.temp}), (err) => {console.log(" weather submit errors", err)})
    .then(() => {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    })
  }


render() {
    if (this.props.geolocationAllowed) {
        return (
        <>
        <button onClick= {() => this.getCoordinates()} temp= {this.state.temp}>Submit</button>
        </>
        )
        }
    
    else {
        return (
            <>
            </>
            )
    }
    }

}
export default WeatherSubmitButton;