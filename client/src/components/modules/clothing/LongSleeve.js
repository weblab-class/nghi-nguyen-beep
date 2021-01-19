import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import longSleeve from "../../assets/images/clothing/longSleeve.png";
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
    return (
        <>
        <img src={longSleeve} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default LongSleeve;