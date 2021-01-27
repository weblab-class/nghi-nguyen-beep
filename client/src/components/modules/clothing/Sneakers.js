import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sneakers from "../../../public/images/clothing/sneakers.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sneakers extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={sneakers} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Sneakers;