import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sunglasses from "../../assets/images/clothing/sunglasses.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sunglasses extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 120,
            lowTemp: 80,
        };
    }

    render(){
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={sunglasses} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default Sunglasses;