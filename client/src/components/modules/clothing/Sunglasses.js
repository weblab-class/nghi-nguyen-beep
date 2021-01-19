import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sunglasses from "../../assets/images/clothing/sunglasses.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sunglasses extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 120,
            lowTemp: 80,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
        if (withinRange && itemInCloset) {
            return (<> <img src={sunglasses} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default Sunglasses;