import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import parka from "../../assets/images/clothing/parka.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Parka extends GeneralItem {
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
        <img src={parka} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Parka;