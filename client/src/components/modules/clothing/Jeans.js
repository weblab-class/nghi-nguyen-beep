import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import jeans from "../../../public/images/clothing/jeans.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Jeans extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={jeans} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Jeans;