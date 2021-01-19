import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sunglasses from "../../assets/images/clothing/sunglasses.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sunglasses extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 75,
            lowTemp: 0,
        };
    }

render(){
    return (
        <>
        <img src={sunglasses} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Sunglasses;