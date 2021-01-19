import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainBoots from "../../assets/images/clothing/rainBoots.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainBoots extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 100,
            lowTemp: 0,
        };
    }

render(){
    return (
        <>
        <img src={rainBoots} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default RainBoots;