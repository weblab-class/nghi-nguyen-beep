import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import cardigan from "../../../public/images/clothing/cardigan.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Cardigan extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 60,
            lowTemp: 20,
        };
    }

    render(){
        let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
        let itemInCloset = this.props.itemInCloset.includes("Cardigan");
        if (withinRange && itemInCloset) {
            return (<> <img src={cardigan} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Cardigan;