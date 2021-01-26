import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweatpants from "../../../public/images/clothing/sweatpants.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweatpants extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 50,
            lowTemp: 0,
        };
    }

    render(){
        let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
            return (<> <img src={sweatpants} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweatpants;