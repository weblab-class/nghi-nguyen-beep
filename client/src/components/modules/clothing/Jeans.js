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
    let withinRange = (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp);
    let itemInCloset = this.props.itemInCloset.includes(String(this.constructor.name));
    if (withinRange && itemInCloset) {
        return (<> <img src={jeans} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
    }
    return (<></>);
}
}

export default Jeans;