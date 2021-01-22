import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import umbrella from "../../../public/images/clothing/umbrella.png";
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
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={umbrella} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Umbrella;