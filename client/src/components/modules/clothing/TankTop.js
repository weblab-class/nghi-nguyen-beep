import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import tankTop from "../../../public/images/clothing/tankTop.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class TankTop extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        if (this.props.itemInCloset) {
            return (<> <img src={tankTop} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default TankTop;