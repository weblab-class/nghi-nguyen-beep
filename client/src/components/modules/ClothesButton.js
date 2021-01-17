import React, {Component} from "react";
import "../modules/ClothesButton.css";
// import "../../components/pages/";
import heartButton from "../assets/images/button.png";
class ClothesButton extends Component {
    constructor(props) {
        super(props);
        this.itemSelected = this.itemSelected.bind();

        this.state = {item: null, specific: null};
    }


componentDidMount() {
    document.title = "ClothesButton";
}

itemSelected = (type, clothing) => {
    if (this.state.item) { //if already selected, unselect it
        this.setState({item: null, specific: null}, () => console.log(clothing, "unselected"));
    }
    else {
        this.setState({item: type, specific: clothing}, () => console.log(clothing, "selected"));
    }
}

render() {
    console.log(this.props.clothing);
   
        return (
        <>
            <div className= "buttonLabel">

            <input type= "checkbox" src= {heartButton} id = {"cb" + String(this.props.clothing)} name= "clothing" onClick= {() => this.itemSelected(this.props.type, this.props.clothing)} value={this.props.clothing}/>
            <label htmlFor= {"cb" + String(this.props.clothing)}>  {this.props.clothing}  </label>
            </div>
            {/* https://stackoverflow.com/questions/30663562/use-images-like-checkboxes/30663705 */}
   

         </>
        )
    }

}
export default ClothesButton;