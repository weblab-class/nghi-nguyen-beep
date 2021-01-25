import React, { Component } from "react";
import { get } from "../../utilities";
import "../../utilities.css";
import Shirt from "../modules/clothing/Shirt.js";
import LongSleeve from "../modules/clothing/LongSleeve.js";
import Jeans from "../modules/clothing/Jeans.js";
import Shorts from "../modules/clothing/Shorts.js";
import Sneakers from "../modules/clothing/Sneakers.js";
import RainBoots from "../modules/clothing/RainBoots.js";
import Parka from "../modules/clothing/Parka.js";
import RainJacket from "../modules/clothing/RainJacket.js";
import Umbrella from "../modules/clothing/Umbrella.js";
import Sunglasses from "../modules/clothing/Sunglasses.js";
import Mittens from "../modules/clothing/Mittens.js";
import Hat from "../modules/clothing/Hat.js";
import Crewneck from "../modules/clothing/Crewneck.js";
import Sweater from "../modules/clothing/Sweater.js";
import Sweatpants from "../modules/clothing/Sweatpants.js";
import TankTop from "../modules/clothing/TankTop.js";
import Cardigan from "../modules/clothing/Cardigan.js";
import GeneralItem from "../modules/clothing/GeneralItem.js";

class OutfitGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: null,
          temp: null, 
          closet: { tops: [], bottoms: [], shoes: [], outerwear: [], accessories: []}, 
        };
    }

    componentDidMount() {
 
      }


    render () {
        return(
          <button type="submit">Submit</button>
          );
    }
    
}


export default OutfitGenerator;