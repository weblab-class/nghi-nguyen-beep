import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainJacket from "../../assets/images/clothing/rainJacket.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainJacket extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 70,
            lowTemp: 40,
        };
    }

    render(){
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={rainJacket} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default RainJacket;