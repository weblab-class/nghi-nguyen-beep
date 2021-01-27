import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainBoots from "../../../public/images/clothing/rainBoots.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class RainBoots extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={rainBoots} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default RainBoots;