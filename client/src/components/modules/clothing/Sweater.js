import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweater from "../../../public/images/clothing/sweater.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweater extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 55,
            lowTemp: 20,
        };
    }

    render(){
        let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
            return (<> <img src={sweater} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweater;