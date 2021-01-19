import React, {Component} from "react";
import "../modules/ClothesButton.css";
// import "../../components/pages/";
import ClosetSubmitButton from "../modules/ClosetSubmitButton.js";
import heartButton from "../assets/images/button.png";
import shirt from "../assets/images/clothing/shirt.png";
import longSleeve from "../assets/images/clothing/longSleeve.png";
import jeans from "../assets/images/clothing/jeans.png";
import shorts from "../assets/images/clothing/shorts.png";
import parka from "../assets/images/clothing/parka.png";
import rainJacket from "../assets/images/clothing/rainJacket.png";
import sneakers from "../assets/images/clothing/sneakers.png";
import rainBoots from "../assets/images/clothing/rainBoots.png";
import umbrella from "../assets/images/clothing/umbrella.png";
import sunglasses from "../assets/images/clothing/sunglasses.png";


class ClothesButton extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind();
        this.state = {item: null, specific: null, selected: false};
    }


componentDidMount() {
    document.title = "ClothesButton";
}

handleChange = (type, clothing) => {
    
    if (this.state.selected) { //if already selected, unselect it
        this.setState({item: type, specific: clothing,  selected: false}, () => 
            {
                if (this.props.onChange) {
                    this.props.onChange(this.state);
                }
            })
    }

    else {
        this.setState({item: type, specific: clothing,  selected: true}, () => 
            {if (this.props.onChange) {
                this.props.onChange(this.state);
                }
            })
        }
}
  

render() {   
    return (
        <>
            <div className= "buttonLabel">

            <input type= "checkbox" id = {"cb" + String(this.props.clothing)} onClick= {() => this.handleChange(this.props.type, this.props.name)}/>
            <label htmlFor= {"cb" + String(this.props.clothing)}> {this.props.clothing} </label>
            </div>
            {/* https://stackoverflow.com/questions/30663562/use-images-like-checkboxes/30663705 */}
   

         </>
        )
    }

}

export default ClothesButton;