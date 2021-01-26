import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import umbrella from "../../../public/images/clothing/umbrella.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Umbrella extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 80,
            lowTemp: 40,
        };
    }

    render(){
        let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
            return (<> <img src={umbrella} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Umbrella;