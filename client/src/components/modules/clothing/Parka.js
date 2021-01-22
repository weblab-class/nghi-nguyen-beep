import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import parka from "../../../public/images/clothing/parka.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Parka extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 40,
            lowTemp: -50,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={parka} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Parka;