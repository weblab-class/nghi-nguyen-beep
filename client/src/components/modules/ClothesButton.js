import React, {Component} from "react";
import "../modules/ClothesButton.css";
// import "../../components/pages/";
import ClosetSubmitButton from "../modules/ClosetSubmitButton.js";
import heartButton from "../assets/images/button.png";
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

            <input type= "checkbox" id = {"cb" + String(this.props.clothing)} name= "clothing" onClick= {() => this.handleChange(this.props.type, this.props.clothing)} value={this.props.clothing}/>
            <label htmlFor= {"cb" + String(this.props.clothing)}>  {this.props.clothing}  </label>
            </div>
            {/* https://stackoverflow.com/questions/30663562/use-images-like-checkboxes/30663705 */}
   

         </>
        )
    }

}

export default ClothesButton;