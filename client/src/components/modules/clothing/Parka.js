import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import parka from "../../../public/images/clothing/parka.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Parka extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={parka} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Parka;