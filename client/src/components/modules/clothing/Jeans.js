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
    if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
        return (<> <img src={jeans} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
    }
    return (<></>);
}
}

export default Jeans;