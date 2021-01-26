import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import jeans from "../../../public/images/clothing/jeans.png";
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

    let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
        return (<> <img src={jeans} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
    }
    return (<></>);
}
}

export default Jeans;