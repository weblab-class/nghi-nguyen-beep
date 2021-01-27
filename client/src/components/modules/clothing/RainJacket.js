import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import rainJacket from "../../../public/images/clothing/rainJacket.png";;
import { render } from "react-dom";
import "./GeneralItem.css";

class RainJacket extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={rainJacket} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default RainJacket;