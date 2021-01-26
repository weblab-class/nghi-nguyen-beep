import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shorts from "../../../public/images/clothing/shorts.png";
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
        let itemInCloset = this.props.itemInCloset;
        if (itemInCloset === String(this.constructor.name)) {
            return (<> <img src={shorts} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Shorts;