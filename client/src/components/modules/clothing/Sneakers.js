import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sneakers from "../../assets/images/clothing/sneakers.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sneakers extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 100,
            lowTemp: 0,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={sneakers} id= {"GeneralItem-"+String(this.constructor.name)}/> <h3 id= {"GeneralItemText-"+String(this.constructor.name)}>{this.constructor.name}</h3></>);
        }
        return (<></>);
    }
}

export default Sneakers;