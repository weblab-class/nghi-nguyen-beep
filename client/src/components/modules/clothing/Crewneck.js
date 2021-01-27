import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import crewneck from "../../../public/images/clothing/crewneck.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Crewneck extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={crewneck} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Crewneck;