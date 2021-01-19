import React, {Component} from "react";
import "./css/Survey.css";
import ClothesButton from "../modules/ClothesButton.js";
import ClosetSubmitButton from "../modules/ClosetSubmitButton.js";
class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "top": [],
          "bottom": [],
          "shoes": [],
          "outerwear": [],
          "accessory": []
        };
    }


componentDidMount() {
    document.title = "Survey";
}

addItem = (obj) => {
  // PLEASE REFACTOR THIS NASTY THING sdjkfsdkmlllz
  console.log(obj, this.state);
  
  let item = obj.item;

  if (obj.selected) {
    if (item === "top") {
      let arr = [...this.state.top];
      if (!arr.includes(obj.specific)) {
        arr.push(obj.specific);
        this.setState({"top": arr});
      }
    }

    else if (item === "bottom") {
      let arr = [...this.state.bottom];
      if (!arr.includes(obj.specific)) {
        arr.push(obj.specific);
        this.setState({"bottom": arr});
      }
    }

    else if (item === "shoes") {
      let arr = [...this.state.shoes];
      if (!arr.includes(obj.specific)) {
        arr.push(obj.specific);
        this.setState({"shoes": arr});
      }
    }

    else if (item === "outerwear") {
      let arr = [...this.state.outerwear];
      if (!arr.includes(obj.specific)) {
        arr.push(obj.specific);
        this.setState({"outerwear": arr});
      }
    }

    else if (item === "accessory") {
      let arr = [...this.state.accessory];
      if (!arr.includes(obj.specific)) {
        arr.push(obj.specific);
        this.setState({"accessory": arr});
      }
    }
  }

  else {
    if (item === "top") {
      let newArr = this.state.top.filter(x => x !== obj.specific);
      this.setState({"top": newArr});
    }

    else if (item === "bottom") {
      let newArr = this.state.bottom.filter(x => x !== obj.specific);
      this.setState({"bottom": newArr});
    }

    else if (item === "shoes") {
      let newArr = this.state.shoes.filter(x => x !== obj.specific);
      this.setState({"shoes": newArr});
    }

    else if (item === "outerwear") {
      let newArr = this.state.outerwear.filter(x => x !== obj.specific);
      this.setState({"outerwear": newArr});
    }

    else if (item === "accessory") {
      let newArr = this.state.accessory.filter(x => x !== obj.specific);
      this.setState({"accessory": newArr});
    }
  } 

} 

render() {

    return (
        <>
        <div className = "Survey-top">
          <ClothesButton type = "top" clothing = "Short Sleeve" picture="shortSleeve.png" onChange={this.addItem}/>
          <ClothesButton type= "top" clothing = "Long Sleeve" picture="longSleeve.png" onChange={this.addItem}/>
        </div>

        <div className = "Survey-bottom">
          <ClothesButton type="bottom" clothing="Jeans" picture="jeans.png"  onChange={this.addItem}/>
          <ClothesButton type="bottom" clothing="Shorts" picture="shorts.png" onChange={this.addItem}/>
        </div>

        <div className = "Survey-shoes">
          <ClothesButton type="shoes" clothing="Rain Boots" picture="rainBoots.png" onChange={this.addItem}/>
          <ClothesButton type="shoes" clothing="Sneakers" picture="sneakers.png" onChange={this.addItem}/>
        </div>

        <div className = "Survey-outerwear">
          <ClothesButton type="outerwear" clothing="Parka" picture="parka.png" onChange={this.addItem}/>
          <ClothesButton type="outerwear" clothing="Rain Jacket" picture="rainJacket.png" onChange={this.addItem}/>
        </div>

        <div className = "Survey-accessory">
          <ClothesButton type="accessory" clothing="Sunglasses" picture="sunglasses.png" onChange={this.addItem}/>
          <ClothesButton type="accessory" clothing="Umbrella" picture="umbrella.png" onChange={this.addItem}/>
        </div>

        <div className = "Survey-submit">
            <ClosetSubmitButton closet= {this.state} userId = {this.props.userId} onClick = {() => navigate("/profile/"+String(this.props.userId))}/>
        </div>
        </>
    )
}

}
export default Survey;