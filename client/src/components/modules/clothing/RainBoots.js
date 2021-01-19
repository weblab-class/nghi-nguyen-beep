import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainBoots from "../../assets/images/clothing/rainBoots.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainBoots extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 70,
            lowTemp: 40,
        };
    }

    render(){
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={rainBoots} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default RainBoots;