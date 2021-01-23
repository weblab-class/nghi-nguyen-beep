import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweatpants from "../../../public/images/clothing/sweatpants.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweatpants extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 50,
            lowTemp: 0,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("Sweatpants");
        if (withinRange && itemInCloset) {
            return (<> <img src={sweatpants} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweatpants;