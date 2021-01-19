import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import umbrella from "../../assets/images/clothing/umbrella.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Umbrella extends GeneralItem {
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
        <img src={umbrella} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Umbrella;