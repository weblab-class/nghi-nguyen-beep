import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shorts from "../../../public/images/clothing/shorts.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shorts extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 100,
            lowTemp: 60,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={shorts} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Shorts;