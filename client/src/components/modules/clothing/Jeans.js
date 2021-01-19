import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import jeans from "../../assets/images/clothing/jeans.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Jeans extends GeneralItem {
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
        <img src={jeans} id= {"GeneralItem-"+String(this.constructor.name)}></img>
        </>
    );}
}

export default Jeans;