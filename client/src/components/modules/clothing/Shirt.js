import GeneralItem from "./GeneralItem.js";
import React, {Component} from "react";
import shirt from "../../../public/images/clothing/shirt.png";
import { render } from "react-dom";
import "./GeneralItem.css";

class Shirt extends GeneralItem {
    constructor(props) {
        super(props);
        this.state = {
            highTemp: 90,
            lowTemp: 55,
        };
    }

    render(){
        // console.log("i", itemInCloset, "ii", this.constructor.name, "iii", typeof(itemInCloset), "iiii", typeof(this.constructor.name), "iiiii", typeof(String(this.constructor.name)));
        if (this.props.itemInCloset) {
            return (<> <img src={shirt} id= {"GeneralItem-"+String(this.constructor.name)}/></>);
        }
        return (<></>);
    }
}

export default Shirt;