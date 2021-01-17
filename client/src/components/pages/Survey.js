import React, {Component} from "react";
import "./css/Survey.css";
import ClothesButton from "../modules/ClothesButton.js";

class Survey extends Component {
    constructor(props) {
        super(props);
        // this.topPressed = this.topPressed.bind();
        // this.bottomPressed = this.bottomPressed.bind();
        // this.shoesPressed = this.shoesPressed.bind();
        // this.outerwearPressed = this.outerwearPressed.bind();
        // this.accessoryPressed = this.accessoryPressed.bind();
        this.state = {
            top: null, topSelected: null,
            bottom: null, bottomSelected: null,
            shoes: null, shoesSelected: null,
            outerwear: null, outerwearSelected: null,
            accesory: null, accessorySelected: null,
        };
    }


componentDidMount() {
    document.title = "Survey";
}


// topPressed = (item) => {
//     this.setState({top: item, topSelected: "top"}, () => console.log(item));
// }


// bottomPressed = (item) => {
//     this.setState({bottom: item, bottomSelected: "bottom"}, () => console.log(item));
// }


// shoesPressed = (item) => {
//     this.setState({shoes: item, shoesSelected: "shoes"}, () => console.log(item));
// }


// outerwearPressed = (item) => {
//     this.setState({outerwear: item, outerwearSelected: "outerwear"}, () => console.log(item));
// }


// accessoryPressed = (item) => {
//     this.setState({accessory: item, accessorySelected: "accessory"}, () => console.log(item));
// }


render() {
  
    return (
        <>
        <div className = "Survey-top">
          <ClothesButton type = "top" clothing = "short sleeve" picture="shortSleeve.png"/>
          <ClothesButton type= "top" clothing = "long sleeve" picture="longSleeve.png"/>
        </div>

        <div className = "Survey-bottom">
          <ClothesButton type="bottom" clothing="jeans" picture="jeans.png"/>
          <ClothesButton type="bottom" clothing="shorts" picture="shorts.png"/>
        </div>

        <div className = "Survey-shoes">
          <ClothesButton type="shoes" clothing="rain boots" picture="rainBoots.png"/>
          <ClothesButton type="shoes" clothing="sneakers" picture="sneakers.png"/>
        </div>

        <div className = "Survey-outerwear">
          <ClothesButton type="outerwear" clothing="parka" picture="parka.png"/>
          <ClothesButton type="outerwear" clothing="rain jacket" picture="rainJacket.png"/>
        </div>

        <div className = "Survey-accessory">
          <ClothesButton type="accessory" clothing="sunglasses" picture="sunglasses.png"/>
          <ClothesButton type="accessory" clothing="umbrella" picture="umbrella.png"/>
        </div>
        </>
    )
}

}
export default Survey;