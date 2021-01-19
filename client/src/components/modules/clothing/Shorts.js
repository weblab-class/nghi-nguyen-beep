import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shorts from "../../assets/images/clothing/shorts.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shorts extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 100,
            lowTemp: 60,
        };
    }

render(){
    return (
        <>
        <img src={shorts} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Shorts;