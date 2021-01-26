import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shirt from "../../../public/images/clothing/shirt.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shirt extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 90,
            lowTemp: 55,
        };
    }

    render(){
        let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
            return (<> <img src={shirt} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Shirt;