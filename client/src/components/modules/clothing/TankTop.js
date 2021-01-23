import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import tankTop from "../../../public/images/clothing/tankTop.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class TankTop extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 120,
            lowTemp: 65,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("TankTop");
        if (withinRange && itemInCloset) {
            return (<> <img src={TankTop} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default TankTop;