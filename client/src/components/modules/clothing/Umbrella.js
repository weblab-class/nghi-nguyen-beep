import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import umbrella from "../../../public/images/clothing/umbrella.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Umbrella extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={umbrella} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Umbrella;