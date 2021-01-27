import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import sunglasses from "../../../public/images/clothing/sunglasses.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Sunglasses extends GeneralItem {
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

export default Sunglasses;