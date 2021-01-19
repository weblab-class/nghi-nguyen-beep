import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sneakers from "../../assets/images/clothing/sneakers.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sneakers extends GeneralItem {
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
        <img src={sneakers} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Sneakers;