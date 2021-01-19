import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import umbrella from "../../assets/images/clothing/umbrella.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Umbrella extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 80,
            lowTemp: 40,
        };
    }

    render(){
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={umbrella} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default Umbrella;