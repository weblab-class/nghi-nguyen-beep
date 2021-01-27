import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import mittens from "../../../public/images/clothing/mittens.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Mittens extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={mittens} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Mittens;