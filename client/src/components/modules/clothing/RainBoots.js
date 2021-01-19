import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainBoots from "../../assets/images/clothing/rainBoots.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainBoots extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 70,
            lowTemp: 40,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={rainBoots} id= {"GeneralItem-"+String(this.constructor.name)}/> <h3 id= {"GeneralItemText-"+String(this.constructor.name)}>{this.constructor.name}</h3></>);
        }
        return (<></>);
    }
}

export default RainBoots;