import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import cardigan from "../../../public/images/clothing/cardigan.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Cardigan extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={cardigan} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Cardigan;