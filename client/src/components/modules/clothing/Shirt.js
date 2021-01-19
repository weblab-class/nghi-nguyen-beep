import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shirt from "../../assets/images/clothing/shirt.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shirt extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 90,
            lowTemp: 60,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("ShortSleeve");
        if (withinRange && itemInCloset) {
            return (<> <img src={shirt} id= {"GeneralItem-"+String(this.constructor.name)}/><h3 id= {"GeneralItemText-"+String(this.constructor.name)}>{this.constructor.name}</h3> </>);
        }
        return (<></>);
    }
}

export default Shirt;