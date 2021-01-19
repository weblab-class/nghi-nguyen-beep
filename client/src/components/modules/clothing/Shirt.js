import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shirt from "../../assets/images/clothing/shirt.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shirt extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 90,
            lowTemp: 60,
        };
    }

    render(){
        console.log("shirt", this.props, (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp))
        if (this.state.lowTemp <= this.props.temp && this.props.temp <= this.state.highTemp) {
            return (<> <img src={shirt} id= {"GeneralItem-"+String(this.constructor.name)}/> </>);
        }
        return (<></>);
    }
}

export default Shirt;