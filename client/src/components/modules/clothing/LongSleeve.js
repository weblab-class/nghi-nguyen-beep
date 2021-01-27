import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import longSleeve from "../../../public/images/clothing/longSleeve.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class LongSleeve extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 60,
            lowTemp: 0,
        };
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={longSleeve} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default LongSleeve;