import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import hat from "../../../public/images/clothing/hat.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Hat extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={hat} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Hat;