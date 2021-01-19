import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainJacket from "../../assets/images/clothing/rainJacket.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainJacket extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 40,
            lowTemp: -50,
        };
    }

render(){
    return (
        <>
        <img src={rainJacket} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default RainJacket;