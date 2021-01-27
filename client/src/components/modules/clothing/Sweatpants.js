import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweatpants from "../../../public/images/clothing/sweatpants.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweatpants extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={sweatpants} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweatpants;