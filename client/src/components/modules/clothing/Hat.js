import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import hat from "../../../public/images/clothing/hat.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Hat extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 100,
            lowTemp: 60,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("Hat");
        if (withinRange && itemInCloset) {
            return (<> <img src={hat} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Hat;