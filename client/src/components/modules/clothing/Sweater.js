import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweater from "../../../public/images/clothing/sweater.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweater extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 55,
            lowTemp: 20,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("Sweater");
        if (withinRange && itemInCloset) {
            return (<> <img src={sweater} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweater;