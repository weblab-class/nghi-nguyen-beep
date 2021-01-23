import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import mittens from "../../../public/images/clothing/mittens.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Mittens extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 60,
            lowTemp: 20,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("Mittens");
        if (withinRange && itemInCloset) {
            return (<> <img src={mittens} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Mittens;