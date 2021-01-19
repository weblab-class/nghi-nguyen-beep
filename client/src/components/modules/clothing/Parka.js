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
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={parka} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default Parka;