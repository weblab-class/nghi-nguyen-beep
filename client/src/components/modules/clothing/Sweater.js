import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sweater from "../../../public/images/clothing/sweater.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sweater extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={shirt} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sweater;